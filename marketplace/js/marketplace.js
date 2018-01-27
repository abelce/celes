
function removeActiveClass() {
    var lis = $('.sort-tab > li');
    for (var i=0; i<lis.length; ++i) {
        $(lis[i]).children('a').removeClass('active')
    }
}

function getCelebs(tab) {
    //all
    // popular
    // newest
    // verified
}

function tabClick(obj,tab)  {
    removeActiveClass()
    $(obj).children('a').addClass('active')
    getCelebs(tab)
}



$(document).ready(function () {
    var urlinfs = purl(window.location.href);
    var page = urlinfs.data.param.query.sort;

    $('#' + page).children('a').addClass('active')
    if (page === 'verified') {
         $('.upcoming-notice').css('display','block')
         $('.anonymous-card').css('display','block')
    } else {
        createList();
    }
})


function createList (celes) {

    $('.celeb-lists > .row').children('.col-sm-6').remove();  //删除所有元素

    // if (!celes) return;


    celes = [
        {
            id: '123123',
            price: 12.3,
            transactions: '24124123',
            owner: 'owner',
            name: 'Trippe'
        }
    ]

    celes.forEach(function(cele, index) {
        var html = '';
        html +=   '<div class="col-sm-6 col-md-3 col-lg-3">'
                + '<div class="item" id="'+ cele.id +'">'
                + '<h1 class="name">'
                + '<a href="http://localhost:8080/marketplace/trippie-redd/">'+ cele.name +' </a>'
                + '<a class="cc-icon" href="/verification/"'
                + 'data-balloon="This card is NOT endorsed or associated with Trippie Redd. For more information about official verified celebrity accounts click here"'
                + 'data-balloon-length="large" data-balloon-pos="right">R</a> <span></span>'
                + '</h1>'
                + '<a href="http://localhost:8080/marketplace/trippie-redd/">'
                + '<div class="celeb-img-bg">'
                + '<div class="celeb-img"'
                + 'style="background-image: url(http://localhost:8080/wp-content/uploads/2018/1/Trippie_Redd_Interview_2.png);"></div>'
                + '</div>'
                + '</a>'
                + '<div class="frame">'
                + '<ul class="celeb-meta">'
                + '<li><span id="left"><b>Price: </b>' + cele.price +'</span> <span id="right">'
                + '<b>Transactions:</b> '+ cele.transactions +'</span></li>'
                + '<li><span id="left" class="element-owner"><b>Owner: </b>'
                + '<a class="owner-card" href="/u/striky">' + cele.owner +'</a></span>'
                + '<span id="right">'
                + '<a target="_blank"'
                + 'href="https://etherscan.io/address/0xbb5Ed1EdeB5149AF3ab43ea9c7a6963b3C1374F7">Contract Link</a></span></li>'
                + '</ul>'
                + '<p class="btn-start">Buy this contract</p>'
                + '</div>'
                + '</div>'
                + '</div>'
        $('.celeb-lists > .row').append(html);
    })
}