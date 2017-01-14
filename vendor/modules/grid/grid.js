window.shackox.grid = (function ( $ ) {
    "use strict";

    var UI = {
        Grid: {
            init: function () {
                this.cacheElements();
                this.loadGrid();
            },
            cacheElements: function () {
                UI.Grid.$grid = $("#jqgrid");
                UI.Grid.$pager = $("#jqgridpager");
            },
            loadGrid: function () {
                UI.Grid.$grid.jqGrid({
                    url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
                    mtype: "GET",
                    styleUI: 'Bootstrap',
                    datatype: "jsonp",
                    colModel: [
                        {
                            label: 'OrderID',
                            name: 'OrderID',
                            key: true,
                            width: 75,
                            formatter: Formatters.orderId
                        },
                        {
                            label: 'Customer ID',
                            name: 'CustomerID',
                            width: 150
                        },
                        {
                            label: 'Order Date',
                            name: 'OrderDate',
                            width: 150
                        },
                        {
                            label: 'Freight',
                            name: 'Freight',
                            width: 150
                        },
                        {
                            label:'Ship Name',
                            name: 'ShipName',
                            width: 150
                        }
                    ],
                    viewrecords: true,
                    height: 250,
                    rowNum: 10,
                    pager: UI.Grid.$pager
                }).navGrid('#jqgridpager',
                            { edit:false,
                              add:false,
                              del:false,
                              search:false
                            }
                          );
            },
            reload: function () {
                UI.Grid.$grid.trigger("reloadGrid");
            }
        }
    };

    var Formatters = {
        orderId: function (cellvalue) {
            return cellvalue + " %";
        }
    };

    UI.Grid.init();

})( jQuery );