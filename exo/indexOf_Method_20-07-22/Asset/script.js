const sourceStr = 'Hello world, welcome to the universe.';
        const searchStr = 'o';
        const indexes = [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map(a => a.index);
        console.log(indexes); // [2, 25, 27, 33]
        const indexx = [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))]
        document.getElementById("demo01").innerHTML = sourceStr;
        document.getElementById("demo").innerHTML = `Les occurences "o" se trouvent a l'index : ${indexes} `; 
