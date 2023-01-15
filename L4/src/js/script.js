const catalogBtn = document.querySelector('.catalog');
const randBtn = document.querySelector('.rand');

catalogBtn.onclick = function () {
    document.querySelector('.category_items').innerText = '';
    $.ajax('data.json', {
        success: fSuccess
    });
}

randBtn.onclick = function () {
    $.ajax('data.json', {
        success: fRand
    })
}

function fRand(data) {
    document.querySelector('.category_items').innerText = '';
    document.querySelector('.categories').innerText = '';
    
    const keys = Object.keys(data);
    const randIndex = Math.floor(Math.random() * keys.length);
    const randKey = keys[randIndex];
    const wdata = data[randKey];
    
    for (let i = 0; i < wdata.length; i++) {
        const item = document.createElement('div');
        const price = document.createElement('div');
        item.className = 'item';
        price.className = 'price';
        item.innerText = wdata[i].id + '\n' + wdata[i].name + '\n' + wdata[i].description;
        price.innerHTML = wdata[i].shortName + ' - Price: ' + wdata[i].price + 'uah';
        item.style.background = "url(\"src/photo/" + wdata[i].photo + "\")";
        
        document.querySelector('.category_items').appendChild(item);
        document.querySelector('.category_items').appendChild(price);
    }
    document.querySelector('.category_title').innerText = keys[randIndex];
}

function fSuccess(data) {
    Object.entries(data).forEach(([key, value]) => {
        const block = document.createElement('button');
        if(block === null){
            block.onclick = function () {
                document.querySelector('.categories').innerText = '';
                document.querySelector('.category_items').innerText = '';
                document.querySelector('.category_title').innerText = key;
                for (let j = 0; j < value.length; j++) {
                    const item = document.createElement('div');
                    const price = document.createElement('div');
                    item.className = 'item';
                    price.className = 'price';
                    item.innerText = value[j].id + '\n' + value[j].name + '\n' + value[j].description;
                    price.innerHTML = value[j].shortName + ' - Price: ' + value[j].price + 'uah';
                    item.style.background = "url(\"src/photo/" + value[j].photo + "\")";
                    document.querySelector('.category_items').appendChild(item);
                    document.querySelector('.category_items').appendChild(price);
                }
            }
            document.querySelector('.category_title').innerText = '';
            block.innerText = key;
            block.className = 'category_btn';
            document.querySelector('.categories').appendChild(block);
        } else {
            return 0;
        }
        
    });
}