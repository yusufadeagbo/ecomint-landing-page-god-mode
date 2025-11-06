<script>
  export let verified = true;
  export let size = 'medium'; // 'small', 'medium', 'large'
  export let variant = 'default'; // 'default', 'minimal', 'prominent'
  export let showLabel = true;
</script>

{#if verified}
  <span
    class="verification-badge {size} {variant}"
    class:with-label={showLabel}
  >
    <svg class="checkmark-icon" viewBox="0 0 20 20" fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd"
      />
    </svg>
    {#if showLabel}
      <span class="label">Verified Operator</span>
    {/if}
  </span>
{/if}

<style>
  .verification-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    border-radius: 9999px;
    font-weight: 600;
    transition: all 150ms ease;
  }

  /* Size variants */
  .verification-badge.small {
    padding: 0.25rem 0.625rem;
    font-size: 0.75rem;
  }

  .verification-badge.small .checkmark-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .verification-badge.medium {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  }

  .verification-badge.medium .checkmark-icon {
    width: 1rem;
    height: 1rem;
  }

  .verification-badge.large {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  .verification-badge.large .checkmark-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  /* Style variants */
  .verification-badge.default {
    background-color: #dcfce7;
    color: #166534;
    border: 1px solid #86efac;
  }

  .verification-badge.minimal {
    background-color: transparent;
    color: #059669;
    border: 1px solid #10b981;
  }

  .verification-badge.prominent {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    border: 1px solid #047857;
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);
  }

  .checkmark-icon {
    flex-shrink: 0;
  }

  .label {
    white-space: nowrap;
  }

  /* Hover effect for prominent variant */
  .verification-badge.prominent:hover {
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
    transform: translateY(-1px);
  }
</style>
