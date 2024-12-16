var mode = 'light'
function change() {
        if (mode == 'light') { // changing to dark mode
                //toggle
                document.getElementById('circle').style.transform = 'translateX(40px)'
                // change mode
                mode = 'dark'
                //changing the colors
                document.documentElement.style.setProperty('--primary', '#67A9ED')
                document.documentElement.style.setProperty('--box', '#222')
                document.documentElement.style.setProperty('--text', '#fff')
                document.documentElement.style.setProperty('--text2', '#000')
                document.documentElement.style.setProperty('--toggle', '#67A9ED')
                //change list items
                var lists = document.getElementsByTagName('ul')
                for (let i = 0; i < lists.length; i++) {
                        lists[i].style.listStyleImage = 'url(ListStyles/darkItem.png)'                     
                }
                //change the text
                document.getElementById('themeto').innerText = 'Light'
        }else{// changing to light mode
                //toggle
                document.getElementById('circle').style.transform = 'translateX(0px)'
                // change mode
                mode = 'light'
                //changing the colors
                document.documentElement.style.setProperty('--primary', '#1e63B8')
                document.documentElement.style.setProperty('--box', '#F2F2F2')
                document.documentElement.style.setProperty('--text', '#000')
                document.documentElement.style.setProperty('--text2', '#fff')
                document.documentElement.style.setProperty('--toggle', 'gray')
                //change list items
                var lists = document.getElementsByTagName('ul')
                for (let i = 0; i < lists.length; i++) {
                        lists[i].style.listStyleImage = 'url(ListStyles/lightItem.png)'                     
                }     
                //change the text
                document.getElementById('themeto').innerText = 'Dark'           
        }
}