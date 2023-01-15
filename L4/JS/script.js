$(loadCategories());

// rand Category
// use func loadCatalogs
function randCatalog() {
  //hide first div or remove after append using `$(".card:first").remove()`
  $(".category").hide()//With no parameters, the .hide() method is the simplest way to hide an element
  $(".catalog").hide()
  $.ajax({
    url: "data/categories.json",
    success: function(result) {
      $.each(result, function(index, item) {

        //var categories = $(".category:first").clone() //clone first divs
        //var id = item.id;
        //var shortName = item.short_name;
        //var name = item.name;
        //var instruction = item.special_instruction;
        //var url = item.url;
        const keys = Object.keys(item);
        const randIndex = Math.floor(Math.random() * keys.length);
        const randKey = keys[randIndex];
        const datas = item[randKey];
        
        for (let i = 0; i < datas.length; i++) {
          //add values inside divs
          //$(categories).find(".category-short_name").html(datas[i].short_name);
          //$(categories).find(".category-name").html(datas[i].name);
          //$(categories).find(".category-instruction").html(datas[i].special_instruction);
          //$(categories).find(".category-img").on("click", function() {
            loadCatalogs(datas[i].short_name, datas[i].url);
          //});
          //$(categories).find(".category-img").attr("src", "images/categories/" + datas[i].short_name + ".jpg");
          $(categories).show() //show cards
          $(categories).appendTo($(".container")) //append to container
        }
        
      });
    }
  });
}

function loadCategories() {
  //hide first div or remove after append using `$(".card:first").remove()`
  $(".category").hide()//With no parameters, the .hide() method is the simplest way to hide an element
  $(".catalog").hide()
  $.ajax({
    url: "data/categories.json",
    success: function(result) {
      $.each(result, function(index, item) {
        var categories = $(".category:first").clone() //clone first divs
        var id = item.id;
        var shortName = item.short_name;
        var name = item.name;
        var instruction = item.special_instruction;
        var url = item.url;
        
        //add values inside divs
        $(categories).find(".category-short_name").html(shortName);
        $(categories).find(".category-name").html(name);
        $(categories).find(".category-instruction").html(instruction);
        $(categories).find(".category-img").on("click", function() {
          loadCatalogs(shortName, url);
        });
        $(categories).find(".category-img").attr("src", "images/categories/" + shortName + ".jpg");
        $(categories).show() //show cards
        $(categories).appendTo($(".container")) //append to container
      });
    }
  });
}

function loadCatalogs(categoryShortName, link) {
    //hide first div or remove after append using `$(".card:first").remove()`
    $(".category").hide()
    $(".catalog").hide()
    $.ajax({
      url: link,
      success: function(result) {
        $.each(result.catalog_items, function(index, item) {
          var catalogs = $(".catalog:first").clone() //clone first divs
          var id = item.id;
          var shortName = item.short_name;
          var name = item.name;
          var description = item.description;
          var price_retail = item.price_retail;
          var price_wholesale = item.price_wholesale;
          var amount_retail = item.amount_retail;
          var amount_wholesale = item.amount_wholesale;
          
          //add values inside divs
          $(catalogs).find(".catalog-short_name").html(shortName);
          $(catalogs).find(".catalog-name").html(name);
          $(catalogs).find(".catalog-description").html(description);
          $(catalogs).find(".catalog-price_retail").html(price_retail);
          $(catalogs).find(".catalog-price_wholesale").html(price_wholesale);
          $(catalogs).find(".catalog-amount_retail").html(amount_retail);
          $(catalogs).find(".catalog-amount_wholesale").html(amount_wholesale);
          $(catalogs).find(".catalog-img").attr("src", "images/catalog/" + categoryShortName + "/" + shortName + ".jpg");
          $(catalogs).show() //show cards
          $(catalogs).appendTo($(".container")) //append to container
        });
      }
    })
    
};