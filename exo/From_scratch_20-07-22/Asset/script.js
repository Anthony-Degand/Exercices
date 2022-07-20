const sourceStr = 'Hello world, welcome to the universe.';
        const searchStr = 'o';
        const indexes = [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map(a => a.index);
        console.log(indexes); // [2, 25, 27, 33]
        document.getElementById("demo").innerHTML = `Les occurences "o" se trouvent a l'index : ${indexes} `;
        document.getElementById-----------------
        $(indexes[0]).css('background-color','yellow') 
        /*$('.couleur').css('background-color','yellow');*/


