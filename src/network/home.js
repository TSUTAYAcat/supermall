import request from "network/request"

import img1 from "assets/img/detail/myImg/01.jpg"
import img2 from "assets/img/detail/myImg/02.jpg"
import img3 from "assets/img/detail/myImg/03.jpg"
import img4 from "assets/img/detail/myImg/04.jpg"
import img5 from "assets/img/detail/myImg/05.jpg"
import img6 from "assets/img/detail/myImg/06.jpg"
import img7 from "assets/img/detail/myImg/07.jpg"
import img8 from "assets/img/detail/myImg/08.jpg"
import img9 from "assets/img/detail/myImg/09.jpg"
const name1 = "武器大师武器大师武器大师武器大师武器大师武器大师"
const name2 = "沃利贝尔沃利贝尔沃利贝尔沃利贝尔沃利贝尔"
const name3 = "托儿所托儿所托儿所托儿所托儿所托儿所托儿所托儿所"
const name4 = "儿童劫儿童劫儿童劫儿童劫儿童劫儿童劫儿童劫儿童劫"
const name5 = "诺克萨斯之手诺克萨斯之手诺克萨斯之手诺克萨斯之手"


export function getHomeMultiData() {
    return request({
        url: "home/multidata"
    })
}

export function getDetail(index) {
    let arr = []
    function deal(i) {
        let obj = {}
        if (i % 2 === index) {
            obj = {
                name: name2,
                img: img2,
                price: 22.28,
                clec: 2,
            }
        } else if (i % 3 === index) {
            obj = {
                name: name3,
                img: img3,
                price: 33.18,
                clec: 3,
            }
        } else if (i % 4 === index) {
            obj = {
                name: name4,
                img: img4,
                price: 42.28,
                clec: 4,
            }
        } else if (i % 5 === index) {
            obj = {
                name: name5,
                img: img5,
                price: 52.28,
                clec: 55,
            }
        } else if (i % 6 === index) {
            obj = {
                name: name1,
                img: img6,
                price: 62.28,
                clec: 6,
            }
        } else if (i % 7 === index) {
            obj = {
                name: name2,
                img: img7,
                price: 72.28,
                clec: 72,
            }
        } else if (i % 8 === index) {
            obj = {
                name: name3,
                img: img8,
                price: 88.88,
                clec: 88,
            }
        } else {
            obj = {
                name: name2,
                img: img2,
                price: 22.28,
                clec: 2,
            }
        }
        return obj
    }
    for (let i = 0; i < 100; i++) {
        arr.push(deal(i))
    }

    return arr
}