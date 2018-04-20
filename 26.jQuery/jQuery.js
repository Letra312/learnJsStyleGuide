// 26.1 Prefix jQuery object variables with a `$`.

// bad code
/**
 * const sidebar = $('.sidebar');
 */

// good code
const $sidebar = $('.sidebar');

const $sidebarBtn = $('.sidebar-btn');



// 26.2 Cache jQuery lookups.
// bad code
/**
 * function setSidebar() {
 *   $('sidebar').hide();
 *   
 *   // ... 
 *   
 *   $('sidebar').css({
 *     'background-color': 'pink',
 *   });
 * }
 */

 // good code
 function setSidebar() {
    const $sidebar = $('.sidebar');
    $sidebar.hide();

    // ...

    $sidebar.css({
      'background-color': 'pink',
    }); 
 }



 // 26.3 For DOM queries use Cascading `$('.sidebar ul')` or parent > child `$('.sidebar > ul')`.



 // 26.4 Use `find` with scoped jQuery object queries.
 // bad code
 /**
  * $('ul', '.sidebar').hide();
  * 
  * $('.sidebar').find('ul).hide();
  */

  // good code 
  $('.sidebar ul').hide();
  $('.sideber > ul').hide();

  $sidebar.find('ul').hide();