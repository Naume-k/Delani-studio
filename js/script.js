// toggling what to do
$(document).ready(function() {
    $(".onCrack1").click(function() {
        $("#click1").toggle();
        $("#magic1").toggle();
    });
    $(".onCrack2").click(function() {
        $("#magic2").toggle();
        $("#click2").toggle();
    });
    $(".onCrack3").click(function() {
        $("#magic3").toggle();
        $("#click3").toggle();
    });
                // hovering images.
// imgone
    $("#pone").hide();
    $("#imgone").animate({opacity:5});
    $("#imgone").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#pone").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#pone").fadeOut();
        });
        // imgtwo
        $("#p2").hide();
    $("#img2").animate({opacity:5});
    $("#img2").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#p2").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#p2").fadeOut();
        });
        // imgthree
        $("#p3").hide();
    $("#img3").animate({opacity:5});
    $("#img3").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#p3").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#p3").fadeOut();
        });
        // imgfour
        $("#p4").hide();
    $("#img4").animate({opacity:5});
    $("#img4").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#p4").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#p4").fadeOut();
        });
        // imgive
        $("#p5").hide();
    $("#img5").animate({opacity:5});
    $("#img5").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#p5").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#p5").fadeOut();
        });
        // imgsix
        $("#p6").hide();
    $("#img6").animate({opacity:5});
    $("#img6").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#p6").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#p6").fadeOut();
        });
        // imgseven
        $("#p7").hide();
    $("#img7").animate({opacity:5});
    $("#img7").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#p7").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#p7").fadeOut();
        });
        // imgeight
        $("#p8").hide();
    $("#img8").animate({opacity:5});
    $("#img8").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#p8").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#p8").fadeOut();
        });
   
    // form
    $("#myBtn").click(function(feedback){
        var name=$("#contact-name").val();
        var email=$("#contact-email").val();
        var feed=$("#contact-message").val();
        if((name==="")||(email==="")||(feed==="")){
            alert("please fill the required fields!");
        }
        else{
            alert(name+", we have recieved your message. Thank you for reaching out to us.");
        }
        feedback.preventDefault();
    })
});
