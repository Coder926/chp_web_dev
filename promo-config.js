/* ════════════════════════════════════════════════════════════
   CHP HOME — PROMOTION CONFIG (single source of truth)
   Used by: index.html (live homepage — ticker + slide-in banner)
            boiler-service-manchester.html (ticker)
            boiler-service-TEMPLATE.html (ticker — template for future region pages)
            annual-service-booking.html (Step 5 promo banner)

   active: true  → promo shown on all pages above
   active: false → promo hidden on all pages above (default off state)

   Discount is applied by the customer entering `code` on the Stripe
   Checkout page (allow_promotion_codes: true) — NOT calculated here.
   See annual-service-booking.html for the related Stripe decision note.

   To change or end a promotion: edit the values below only.
   Do not duplicate this object in any other file.
════════════════════════════════════════════════════════════ */
var PROMO = {
  active: true,                                  // ← set false to turn off everywhere
  code:   'SUMMER5',                              // ← promotion code customers enter at checkout
  label:  'Summer Offer (ends 31 Aug)',            // short label — ticker highlight + slide-in headline
  text:   'Save £5 with code SUMMER5',             // short line — ticker + booking page banner
  detail: 'Enter code SUMMER5 at checkout to save £5 on your annual boiler service.'
};
