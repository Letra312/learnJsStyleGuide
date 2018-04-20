// 25.1 When attaching data payloads(装载) to events (whether DOM events or something more propietary(专职的) like Backbone events), pass an object literal (also known as a "hash")
// instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding updating every handler for he event. For example, instead of:

// bad code
/**
 * $(this).trigger('listingUpdated', listing.id);
 * 
 * // ... 
 * 
 * $(this).on('listingUpdated', (e, listingId) => {
 *   // do something with listingID
 * });
 */

// prefer:
// good code
$(this).trigger('listingUpdated', { listingID: listing.id });

// ...

$(this).on('listingUpdated', (e, data) => {
  // do something with data.listingID
});
