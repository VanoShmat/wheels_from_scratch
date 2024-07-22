$(document).ready(function () {
    // toggle burger
    $(".burger").on("click", function () {
        $("html").toggleClass("menu-open");
    });
    // closes mob nav if we click on link
    $(".menu__link").on("click", function () {
        $("html").removeClass("menu-open");
    });

    // closes mob nav if click occurred outside the header or on the book button
    $(document).click(function (event) {
        if ($("html").hasClass("menu-open")) {
            if (!$(event.target).closest(".header").length || $(event.target).hasClass("header__book-btn")) {
                $("html").removeClass("menu-open");
            }
        }
    });
});

// changes active table
function showTable(tableId) {
    var $tables = $(".pricing__table");
    $tables.removeClass("table-active");
    $("#" + tableId).addClass("table-active");
}

// changes active btn
$(".pricing__btn").on("click", function () {
    $(".pricing__btn").removeClass("active");
    $(this).addClass("active");
});

// changes active menu link
$(".menu__link").on("click", function () {
    $(".menu__link").removeClass("active");
    $(this).addClass("active");
});

// // opens popup with booking
// $(".book-btn").on("click", function () {
//     $(".popup-book").addClass("active");
//     $("html").toggleClass("popup-open");
// });

// // closes popup with booking
// $(".popup-book__overlay, .booking__close").on("click", function () {
//     $(".popup-book").removeClass("active");
//     $("html").toggleClass("popup-open");
// });

//dropdowns in booking form
$(document).ready(function () {
    $(".dropdown__button").click(function () {
        var $dropdownList = $(this).siblings(".dropdown__list");
        $(".dropdown__list").not($dropdownList).removeClass("dropdown__list--show");
        $dropdownList.toggleClass("dropdown__list--show");
        $(".dropdown__button").not(this).removeClass("active");
        $(this).toggleClass("active");
    });

    $(".dropdown__item").click(function () {
        var selectedText = $(this).text();
        var $dropdown = $(this).closest(".dropdown");
        $dropdown.find(".dropdown__button").text(selectedText).removeClass("active");
        $dropdown.find(".dropdown__input").val(selectedText);
        $dropdown.find(".dropdown__list").removeClass("dropdown__list--show");
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".dropdown").length) {
            $(".dropdown__list").removeClass("dropdown__list--show");
            $(".dropdown__button").removeClass("active");
        }
    });
});

//smooth scrolling
$(document).ready(function () {
    var headerHeight = $(".header").outerHeight();

    $(".menu__link").on("click", function (event) {
        event.preventDefault();
        var targetId = $(this).attr("href");
        var targetElement = $(targetId);
        var targetPosition = targetElement.offset().top - headerHeight - 10;

        $("html, body").animate(
            {
                scrollTop: targetPosition,
            },
            600
        );
    });
});
