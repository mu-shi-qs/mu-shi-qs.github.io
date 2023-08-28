let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click', function () {
    card.setAttribute("style", "opacity:0");
    let x = document.createElement("audio");
    x.setAttribute("src", "Jurrivh - Lonely Day.mp3");
    x.setAttribute("autoplay", "autoplay");

    let i = 0
    let str = '乐乐对不起，昨天是我不对a我不该一时得意忘形对你说了过分的话，不该说你不温柔，不该故意说一些让你生气的话a更不应该一次又一次地重复这些错误a对不起,我以后一定不会再让你生气的a我真的知道错了，并且进行了认真的检讨a以后不会发生这种事了┭┮﹏┭┮ 呜呜呜你的小狗'
    let strp = ''

    function print() {
        if (str[i] == 'a') {
            document.getElementById("box").innerHTML = strp + "<br><br>+'|'";
            strp += "<br><br>";
        }
        else {
            strp += str[i];
            box.innerHTML = strp + '|';
        }
        i++;
    }
    setTimeout(() => {
        let printid = setInterval(() => {
            print();
            if (i == str.length) {
                strp[i - 1] = '';
                document.getElementById("box").innerHTML = strp
                clearInterval(printid);
            }
        }, 190);
    }, 5500);
    function appearBackground() {
        setTimeout(() => {
            box.style.opacity = 1
        }, 1500)
    }
    appearBackground()

})
