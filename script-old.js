var ViewModel = function(){
    var self = this;

    self.products = ['p1.jpg','p2.jpeg','p3.jpeg','p4.jpeg','p5.jpeg','p6.jpeg','p7.jpeg','p8.jpeg','p10.jpeg','p11.jpeg','p12.jpeg','p13.png','p14.jpeg','p15.png','p16.png','p17.png','p18.jpeg'];
    self.lifestyle = ['l1.jpeg','l2.jpeg','l3.jpg','l4.jpeg','l5.jpeg','l6.jpeg','l7.jpeg','l8.jpeg','l9.jpeg','l10.jpeg','l11.jpeg','l12.jpeg','l13.jpeg','l14.jpeg','l15.jpeg','l16.jpg','l17.jpg'];

    self.allpics = self.products.concat(self.lifestyle);

    self.visible = ko.observableArray(self.allpics);
    self.chosen = ko.observable();

    self.viewProducts = function(){
        self.visible(self.products);
    }
    self.viewLifestyle = function(){
        self.visible(self.lifestyle);
    }
    self.viewAll = function(){
        self.visible(self.allpics);
    }

    self.single = function(img){
        self.chosen(img);
    }

    self.next = function(){
        var now = self.visible().indexOf(self.chosen());
        if(now==self.visible().length-1){
            self.chosen(self.visible()[0]);
        }else{
            self.chosen(self.visible()[now+1]);
        }
    }
    self.prev = function(){
        var now = self.visible().indexOf(self.chosen());
        if(now==0){
            self.chosen(self.visible()[self.visible().length-1]);
        }else{
            self.chosen(self.visible()[now-1]);
        }
    }
}
var vm = new ViewModel();
ko.applyBindings(vm);

function navigate(){
    $('.tab-pane').hide();
    $('.nav-item').removeClass('active')
    var hash = window.location.hash;
    if(!hash){
        hash = '#nav-home'
    }
    $(hash).show();
    $('#nav-tab .nav-item[href="'+hash+'"]').addClass('active')
}
$(window).bind( 'hashchange', function(){
    navigate()
})
$(document).ready(function(){
    console.log('loaded');
    $("#moved").modal('show');
    navigate();
});
const observer = lozad(); // lazy loads elements with default selector as ".lozad"
observer.observe();