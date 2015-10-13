var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1xu87Z5gYxzBg5z08J4JnRNrWEMAMfGXI4D3ymI9z-4w/pubhtml';

$(document).ready( function() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo
                    } );
});

function showInfo(data, tabletop) {
  var source   = $(".sports-template").html();
  var template = Handlebars.compile(source);
  console.log(data);

  $.each( tabletop.sheets("3-A").all(), function(i, soccer) {
    var html = template(soccer);
    $("#content").append(html);
  });

}
