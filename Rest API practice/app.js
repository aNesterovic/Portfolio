let heroName = document.querySelector('input[data-name="heroName"]'),
    heroComics = document.querySelector('select[data-name="heroComics"]'),
    heroFavouriteForm = document.querySelector('input[data-name="heroFavourite"]'),
    heroesForm = document.querySelector('#heroesForm');
let urlComics = 'https://61c9d37520ac1c0017ed8eac.mockapi.io/universes';
let urlHeros = 'https://61c9d37520ac1c0017ed8eac.mockapi.io/heroes';

const controller = async (file, method = 'GET', obj) => {
    let paramObj = {
        method,
        headers: {
            "Content-type": "application/json"
        }
    };

    if (obj) {
        paramObj.body = JSON.stringify(obj)
    };

    let request = await fetch(file, paramObj);
    if (request.ok) {
        return request.json();
    } else {
        throw new Error(request.statusText);
    }
};

const addTableBbody = (obj) => {
    let heroesTable = document.querySelector('#heroesTable > tbody');
    let checked = obj.favourite ? `checked` : '';
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${obj.name}</td>
        <td>${obj.comics}</td>
        <td>
            <label class="heroFavouriteInput">
                Favourite: <input type="checkbox" ${checked}>
            </label>
        </td>
        <td><button>Delete</button></td>
    `
    heroesTable.append(tr);
    btnFunc(obj);
}

const renderHero = (renderObj) => {
    if (Array.isArray(renderObj)) {
        renderObj.forEach(async (el) => {
            addTableBbody(el);
        })
    } else {
        addTableBbody(renderObj)
    }
}

let heroFavouriteInput = (obj) => {
    let heroFavouriteInput = document.querySelectorAll('tbody .heroFavouriteInput > input')
    for (let elem of heroFavouriteInput) {
        elem.addEventListener('change', async () => {
            let namePutElem = elem.offsetParent.parentElement.firstElementChild.innerText;
            if (Array.isArray(obj)) {
                let [putElememt] = obj.filter((el) => el.name === namePutElem && el);
                let newobjHero = {
                    id: putElememt.id,
                    name: putElememt.name,
                    comics: putElememt.comics,
                    favourite: elem.checked
                }
                try {
                    await controller(`${urlHeros}/${putElememt.id}`, 'PUT', newobjHero);
                } catch (err) {
                    console.log(err)
                }
            } else {
                let heroesObj = await controller(`${urlHeros}`);
                let [favorObj] = heroesObj.filter((el) => el.name === obj.name && el)
                if (favorObj.name === namePutElem) {
                    let newobjHero = {
                        id: favorObj.id,
                        name: favorObj.name,
                        comics: favorObj.comics,
                        favourite: elem.checked
                    }
                    try {
                        await controller(`${urlHeros}/${favorObj.id}`, 'PUT', newobjHero);
                    } catch (err) {
                        console.log(err)
                    }
                }
            }
        })
    }
}

(async () => {
    let comicsList = await controller(`${urlComics}`);

    comicsList.forEach(el => {
        let option = document.createElement('option');
        option.setAttribute('value', el.name);
        option.innerText = `${el.name}`
        heroComics.append(option)
    })
})();

(async () => {
    try {
        let heroesObj = await controller(`${urlHeros}`);
        renderHero(heroesObj);
        heroFavouriteInput(heroesObj);
    } catch (err) {
        console.log(err)
    }
})();

(async () => {
    heroesForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        let heroComicsValue = [...heroComics.selectedOptions];
        [heroComicsValue] = heroComicsValue.map(el => el.value)
        let objHero = {
            name: heroName.value,
            comics: heroComicsValue,
            favourite: heroFavouriteForm.checked
        }
        let arrHero = await controller(urlHeros);
        arrHero = arrHero.map(el => el.name)

        if (!arrHero.includes(objHero.name)) {
            try {
                await controller(`${urlHeros}`, "POST", objHero);
            } catch (err) {
                console.log(err)
            }
            renderHero(objHero);
            heroFavouriteInput(objHero);
        } else {
            console.log('Hero already exist.');
        }
    })
})();

const btnFunc = async (obj) => {
    let [...trName] = await document.querySelectorAll(`tbody button`)
    trName.forEach((el) => {
        el.addEventListener('click', async (event) => {
            let heroName = event.target.closest('tr').firstElementChild.innerText;
            if (heroName === obj.name) {
                if (!obj.id) {
                    let heroesObj = await controller(urlHeros);
                    [heroesObj] = heroesObj.filter((el) => el.name === obj.name && el);
                    obj.id = heroesObj.id
                }
                try {
                    await controller(`${urlHeros}/${obj.id}`, 'DELETE');
                    el.offsetParent.parentElement.innerHTML = '';
                } catch (err) {
                    console.log(err)
                }
            }
        })
    })
};

