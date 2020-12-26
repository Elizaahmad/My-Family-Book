var members = [
    "https://jerrymahoney.files.wordpress.com/2013/06/familybook.png", 
    "https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-stock-vector-little-girl-avatar-character-vector-illustration-design.jpg?ver=6", 
    "https://thumbs.dreamstime.com/b/print-175056460.jpg", 
  
    "https://www.clipartkey.com/mpngs/m/145-1456201_female-using-smartphone-mom-and-baby-cartoon-png.png", 

    ];

    var names = [
    "My Family-Book", 
    "Eliza Ahmad", 
    "Father", 
    "Mother", 
    ];

    var count = 0;

    function nextslide () {

    document.getElementById("members").src = members[count];

    document.getElementById("names").innerHTML = names[count];
    
    count++;

    if (count == 6) {
    
    count = 0;

    }

    }