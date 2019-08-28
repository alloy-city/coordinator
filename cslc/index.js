import { post } from '../http/index';

let n = 0;
let stagesStyles = ["info", "warning", "danger", "success"];
let parent;
let list;
let tableBody;
let httpLock = false;

let filter = [0, 1, 2, 3];

function reset() {
    filter = [];
    n = 0;
    list.remove();
    httpLock = false;

    let filterElements = document.getElementsByClassName("cslc-filter");
    for (let i=0; i<filterElements.length; i++) {
        if (filterElements[i].checked) filter.push(i);
    }

    getRelations();
}

function getScrollPercent(e) {
    let h = e.target,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    if ((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) > 0.8) {
        if (!httpLock) {
            httpLock = true;
            getRelations();
        }
    }
}

function getRelations() {
    console.log(filter);

    post({"skip": n, "stages": filter}, "cslc/list", show);
}

function show(res) {
    if (n == 0) {
        parent = document.getElementById("cslc");
        list = document.createElement("table");
        list.classList.add("table");

        tableBody = document.createElement("tbody");
        parent.style.overflow = "auto";
        parent.style.scrollBehavior = "smooth";
        parent.style.height = "80vh";
        parent.onscroll = getScrollPercent;
    
        list.appendChild(htmlToElement(`
            <thead>
                <tr>
                    <th>Parcours</th>
                    <th>Apprenant</th>
                    <th>Signature</th>
                    <th>Dbt Pmnt</th>
                    <th>Cncl Pmnt</th>
                    <th>Visites</th>
                    <th>Stage</th>
                </tr>
            </thead>
        `));

        list.appendChild(tableBody);
        parent.appendChild(list);

        let filterElements = document.getElementsByClassName("cslc-filter");
        for (let i=0; i<filterElements.length; i++) {
            filterElements[i].onclick = reset;
        }
    }

    res.json().then(res => {
        if (!res.length || res.length == 0) return;

        n += res.length;

        for (let i=0; i<res.length; i++) {
            tableBody.appendChild(htmlToElement(`<tr class="${stagesStyles[res[i].stage]}">
                <td>${res[i].course.title ? res[i].course.title : " - "}</td>
                <td>${res[i].user.mainEmail ? res[i].user.mainEmail : " - "}</td>
                <td>${res[i].signatureTime ? res[i].signatureTime : " - "}</td>
                <td>${res[i].paymentIntensionTime ? res[i].paymentIntensionTime : " - "}</td>
                <td>${res[i].paymentConclusionTime ? res[i].paymentConclusionTime : " - "}</td>
                <td>${res[i].views.length ? res[i].views.length : " - "}</td>
                <td>${res[i].stage ? res[i].stage : " - "}</td>
            </tr>`));
        }

        httpLock = false;
    });
}

export { getRelations };
