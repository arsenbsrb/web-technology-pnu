const catalogBtn = document.querySelector('.catalog');
const specialBtn = document.querySelector('.rand');

catalogBtn.onclick = function () {
    document.querySelector('.category_items').innerText = '';
    $.ajax('data.json', {
        success: funcSuccess
    });
}

specialBtn.onclick = function () {
    $.ajax('data.json', {
        success: funcRand
    })
}

function funcRand(data) {

    document.querySelector('.category_items').innerText = '';
    document.querySelector('.categories').innerText = '';
    
    const keys = Object.keys(data);
    const randIndex = Math.floor(Math.random() * keys.length);
    const randKey = keys[randIndex];
    const datas = data[randKey];
    
    for (let i = 0; i < datas.length; i++) {
        const item = document.createElement('div');
        const price = document.createElement('div');
        item.className = 'item';
        price.className = 'price';
        
        item.innerText = datas[i].id + '. ' + datas[i].name + '\n' + datas[i].description;
        price.innerHTML = datas[i].shortName + ' - Price: ' + datas[i].price + '$';
        
        item.style.background = "url(\"src/photo/" + datas[i].photo + "\")";
        document.querySelector('.category_items').appendChild(item);
        document.querySelector('.category_items').appendChild(price);
    }
    
    document.querySelector('.category_title').innerText = keys[randIndex];
}




function funcSuccess(data) {
    Object.entries(data).forEach(([key, value]) => {
        const block = document.createElement('button');
        block.onclick = function () {
            document.querySelector('.categories').innerText = '';
            document.querySelector('.category_items').innerText = '';
            document.querySelector('.category_title').innerText = key;
            for (let j = 0; j < value.length; j++) {
                const item = document.createElement('div');
                const price = document.createElement('div');
                item.className = 'item';
                price.className = 'price';
                item.innerText = value[j].id + '. ' + value[j].name + '\n' + value[j].description;
                price.innerHTML = value[j].shortName + ' - Price: ' + value[j].price + '$';
                item.style.background = "url(\"src/photo/" + value[j].photo + "\")";
                document.querySelector('.category_items').appendChild(item);
                document.querySelector('.category_items').appendChild(price);
            }
        }
        document.querySelector('.category_title').innerText = '';
        block.innerText = key;
        block.className = 'category_btn';
        document.querySelector('.categories').appendChild(block);
    });
}