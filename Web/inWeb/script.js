console.log('log')
console.clear()
console.log('log')
console.error('error')
console.info('info')

let obj = {name : 'Reza', Lname : 'shahmoradi'}
let array = [1,2,3,4,5,6,7,8,9]
console.table(obj)
console.count(array)  /**شمارش دفعات اجرا */

console.time()
let sum = 0
for (let i = 0; i < 10000000; i++) {
    sum += i 
}
let time = console.timeEnd()
console.log(time)
// window.length returns number of iframe tags
// window.closed returns a bool that the window is close or not(future)

// navigator(find browser and version):
navigator.saysWho = (() => {
    const { userAgent } = navigator
    let match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
    let temp
  
    if (/trident/i.test(match[1])) {
      temp = /\brv[ :]+(\d+)/g.exec(userAgent) || []
  
      return `IE ${temp[1] || ''}`
    }
  
    if (match[1] === 'Chrome') {
      temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/)
  
      if (temp !== null) {
        return temp.slice(1).join(' ').replace('OPR', 'Opera')
      }
  
      temp = userAgent.match(/\b(Edg)\/(\d+)/)
  
      if (temp !== null) {
        return temp.slice(1).join(' ').replace('Edg', 'Edge (Chromium)')
      }
    }
  
    match = match[2] ? [ match[1], match[2] ] : [ navigator.appName, navigator.appVersion, '-?' ]
    temp = userAgent.match(/version\/(\d+)/i)
  
    if (temp !== null) {
      match.splice(1, 1, temp[1])
    }
  
    return match.join(' ')
  })()
  
  console.log(navigator.saysWho) // outputs: `Chrome 89`
// END

window.pageYOffset
window.pageXOffset
window.screenX /*فاصله صفحه تا انتهای کناری */
window.screenLeft
window.screenY
window.screenTop

// =================================================

window.alert("hello")
let myWin = window.open("https://atismobile.ir", 'atis', 300) /**ابجکت صفحه جدید را مورد نظر میگیرد */
myWin.focus()
myWin.close()

myWin.opener /**ابجکت باز کننده صفحه را برمیگرداند */

window.confirm('confirm!') /**returns bool */

window.print() /**real print */
let pro = prompt('enter your name')
console.log(pro)

window.stop() /**stop load */

let inrev = setInterval(()=>{
  console.log('hello')
}, 3000)
//heppen every 3 second and repeat

setTimeout(()=>{
  console.log('hello')
}, 3000)
//heppen every 3 second but not repeat

/*clearInterval(inrev) /**stop interval */
/*clearTimeout(...) /**stop timeout */

window.scroll(100,200)
window.scrollTo(100,300)

window.innerHeight /**صفحه ای که کاربر میبیند */
window.innerWidth

window.matchMedia("(min-width:824px)").matches /**returns bool */
window.matchMedia("(max-width:824px)").matches /**returns bool */

// part of URL
window.location.hostname
window.location.protocol
window.location.port
window.location.pathname
window.location.hash // زمانی که چیزی به یوار ال اضافه میشود هش گفته میشود
window.location.search // مروبط به جایی از یو ار ال میشود که ما اطلاعاتی را از طریق یو ار ال به سرور بفرستیم
window.location.href // all of URL
window.location.host // ip and port
location.origin // protocol ip port
location.assign("http...") // chage URL to what you given   هر قسمتی که ذکر نشود تغغیر نمیکند
// or 
location.href = "https://......"
location.reload()
location.replace("https://........") //جایگزین میشود و قابل بازگشت به صفحه قبل نیست


window.history
history.length //تعداد تب هایی که در ان صفحه رفتیم
history.back()
history.forward()
history.go(-1,1,2) //جابجایی بید صفحات

// one page aplication 1:50

history.state // change path but no reload and request
history.pushState({id:2}, "js", "js-tetorial")

window.innerHeight
window.outerWidth 

// work with devise
window.screen
screen.width
screen.height
screen.availWidth
screen.availHeight
screen.orientation.type

// storage in browser, application show cookies, 4k, in all tab we can use
window.document
document.cookie = "product_name = ball;" // delete because it doesn't have expires time
document.cookie = "name = Reza; max-age = 5" // 5s
let date = new Date("2015/1/1").toUTCString()
document.cookie = `name = Reza; expires = ${date}`
// for delete change date to a time in past

window.localStorage // application part, in all tab we can use
localStorage.setItem('name', 'Reza')
localStorage.setItem("age", 22)

localStorage.getItem("age")
localStorage.getItem("age")

localStorage.removeItem('age')
localStorage.clear()

// just in one tab use, remove when we close page
sessionStorage.setItem("name", "mogamad")
sessionStorage.getItem('name')


// 2:40 location


// DOM : document object model

// .....dummyProject

















