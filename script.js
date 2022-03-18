
document.querySelector('.btn').addEventListener('click', () => {
    let title = document.querySelector('title')
    title.innerHTML === 'Light Mode' ? title.innerHTML = 'Dark Mode' : title.innerHTML = 'Light Mode'
    let body = document.querySelector('body');

    const setBodyDark = body => {
        body.classList.remove('light')
        body.classList.add('dark')
        body.querySelector('a').innerHTML = 'Dark Mode'
    }
    const setBodyLight = body => {
        body.classList.remove('dark')
        body.classList.add('light')
        body.querySelector('a').innerHTML = 'Light Mode'
    }
    body.classList.contains('light') ? setBodyDark(body) : setBodyLight(body)
})