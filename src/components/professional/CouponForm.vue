<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Ticket, 
  CheckCircle, 
  XCircle, 
  Loader2, 
  AlertCircle,
  Percent
} from "lucide-vue-next";

interface Props {
  originalAmount: number;
  currency?: string;
  placeholder?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  currency: 'USD',
  placeholder: 'Código de cupón',
  disabled: false
});

const emit = defineEmits<{
  amountChanged: [amount: number];
  couponApplied: [coupon: string, discount: number];
  couponRemoved: [];
  error: [message: string];
}>();

// State
const couponCode = ref('');
const isLoading = ref(false);
const error = ref('');
const appliedCoupon = ref<{
  code: string;
  discount: number;
  discountedAmount: number;
} | null>(null);

// Computed
const currentAmount = computed(() => {
  return appliedCoupon.value?.discountedAmount || props.originalAmount;
});

const discountPercentage = computed(() => {
  if (!appliedCoupon.value) return 0;
  return Math.round(((props.originalAmount - appliedCoupon.value.discountedAmount) / props.originalAmount) * 100);
});

const isValidCoupon = computed(() => {
  return couponCode.value.length >= 3 && /^[A-Z0-9\-]+$/i.test(couponCode.value);
});

const canApply = computed(() => {
  return isValidCoupon.value && !isLoading.value && !appliedCoupon.value && !props.disabled;
});

// Methods
const applyCoupon = async () => {
  if (!canApply.value) return;

  error.value = '';
  isLoading.value = true;

  try {
    const { data } = await axios.post('/api/coupons/validate', {
      code: couponCode.value.toUpperCase(),
      originalAmount: props.originalAmount
    });

    if (data.valid && typeof data.discountedAmount === 'number') {
      appliedCoupon.value = {
        code: couponCode.value.toUpperCase(),
        discount: props.originalAmount - data.discountedAmount,
        discountedAmount: data.discountedAmount
      };
      
      emit('amountChanged', data.discountedAmount);
      emit('couponApplied', couponCode.value.toUpperCase(), props.originalAmount - data.discountedAmount);
    } else {
      error.value = data.message || 'Cupón inválido o expirado';
      emit('error', error.value);
    }
  } catch (err: any) {
    error.value = err.response?.data?.message || 'Error al validar el cupón. Inténtalo de nuevo.';
    emit('error', error.value);
  } finally {
    isLoading.value = false;
  }
};

const removeCoupon = () => {
  appliedCoupon.value = null;
  couponCode.value = '';
  error.value = '';
  emit('amountChanged', props.originalAmount);
  emit('couponRemoved');
};

const formatCurrency = (amount: number) => {
  const locale = props.currency === 'USD' ? 'en-US' : 'es-CO';
  return (amount / 100).toLocaleString(locale, {
    style: 'currency',
    currency: props.currency
  });
};

// Watch for external changes
watch(() => props.originalAmount, () => {
  if (appliedCoupon.value) {
    // Recalculate discount if original amount changes
    applyCoupon();
  }
});

// Clear error when user types
watch(couponCode, () => {
  if (error.value) {
    error.value = '';
  }
});
</script>

<template>
  <div class="space-y-6">
    
    <!-- Coupon input section -->
    <div class="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border border-border/50">
      <div class="flex items-center gap-2 mb-4">
        <Ticket class="w-5 h-5 text-primary" />
        <h3 class="text-lg font-semibold text-foreground">¿Tienes un código de descuento?</h3>
      </div>
      
      <div class="space-y-4">
        <!-- Input and button -->
        <div class="flex flex-col sm:flex-row gap-3">
          <div class="flex-1 relative">
            <Input
              v-model="couponCode"
              :placeholder="placeholder"
              :disabled="isLoading || !!appliedCoupon || disabled"
              class="pr-10 text-center sm:text-left font-mono uppercase tracking-wider"
              @keyup.enter="applyCoupon"
              @input="couponCode = ($event.target as HTMLInputElement).value.toUpperCase()"
            />
            
            <!-- Input status icon -->
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <CheckCircle 
                v-if="appliedCoupon" 
                class="w-5 h-5 text-green-500" 
              />
              <AlertCircle 
                v-else-if="error" 
                class="w-5 h-5 text-red-500" 
              />
              <Percent 
                v-else-if="isValidCoupon" 
                class="w-5 h-5 text-primary" 
              />
            </div>
          </div>
          
          <Button
            v-if="!appliedCoupon"
            @click="applyCoupon"
            :disabled="!canApply"
            class="px-6 bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90"
          >
            <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
            {{ isLoading ? 'Validando...' : 'Aplicar' }}
          </Button>
          
          <Button
            v-else
            @click="removeCoupon"
            variant="outline"
            class="px-6 border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950"
          >
            <XCircle class="w-4 h-4 mr-2" />
            Quitar
          </Button>
        </div>

        <!-- Error message -->
        <div 
          v-if="error" 
          class="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg"
        >
          <XCircle class="w-4 h-4 text-red-500 flex-shrink-0" />
          <p class="text-sm text-red-600 dark:text-red-400">{{ error }}</p>
        </div>

        <!-- Success message -->
        <div 
          v-if="appliedCoupon" 
          class="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg"
        >
          <CheckCircle class="w-4 h-4 text-green-500 flex-shrink-0" />
          <div class="flex-1">
            <p class="text-sm text-green-600 dark:text-green-400">
              ¡Cupón aplicado exitosamente!
            </p>
            <p class="text-xs text-green-500 dark:text-green-500 mt-1">
              Código: <span class="font-mono font-semibold">{{ appliedCoupon.code }}</span>
            </p>
          </div>
          <Badge class="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
            -{{ discountPercentage }}%
          </Badge>
        </div>
      </div>
    </div>

    <!-- Price summary -->
    <div class="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
      <div class="space-y-4">
        
        <!-- Original price -->
        <div class="flex justify-between items-center">
          <span class="text-muted-foreground">Precio original:</span>
          <span 
            :class="[
              'font-semibold',
              appliedCoupon ? 'line-through text-muted-foreground' : 'text-foreground'
            ]"
          >
            {{ formatCurrency(originalAmount) }}
          </span>
        </div>

        <!-- Discount -->
        <div v-if="appliedCoupon" class="flex justify-between items-center">
          <span class="text-green-600 dark:text-green-400">Descuento ({{ discountPercentage }}%):</span>
          <span class="font-semibold text-green-600 dark:text-green-400">
            -{{ formatCurrency(appliedCoupon.discount) }}
          </span>
        </div>

        <!-- Divider -->
        <hr class="border-border/50" />

        <!-- Final price -->
        <div class="flex justify-between items-center">
          <span class="text-lg font-semibold text-foreground">Total a pagar:</span>
          <span class="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-orange-600 bg-clip-text">
            {{ formatCurrency(currentAmount) }}
          </span>
        </div>

        <!-- Savings highlight -->
        <div v-if="appliedCoupon" class="text-center">
          <Badge class="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-4 py-2">
            ¡Ahorras {{ formatCurrency(appliedCoupon.discount) }}!
          </Badge>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-mono {
  font-family: 'Courier New', Courier, monospace;
}
</style>
