let Ckie = (function () {
    function setItem(key, val, day) {
        if (!day) {
            document.cookie = `${key}=${val}`;
        } else {
            let date = new Date();
            date.setDate(date.getDate() + day);
            document.cookie = `${key}=${val};expires=` + date;
        }
    }

    function getItem(key) {
        let str = document.cookie;
        let o = str.split("; ");
        let obj = {};
        o.forEach(ele => {
            let data = ele.split("=");
            let key = data[0];
            let val = data[1];
            obj[key] = val;
        })
        return obj[key];
    }

    function gets() {
        let str = document.cookie;
        let o = str.split("; ");
        let j = [];
        o.forEach(ele => {
            let data = ele.split("=");
            let key = data[0];
            j.push(key)
        })
        return j;
    }

    function removeItem(key) {
        setItem(key, null, -1);
    }

    function clearAll() {
        let key = gets();
        key.forEach(ele => {
            removeItem(ele);
        })
    }
    return {
        setItem,
        getItem,
        gets,
        removeItem,
        clearAll
    }

})()