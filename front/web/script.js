let username = "";
let useraddr = "";

document.addEventListener("DOMContentLoaded", function () {
    let usernameElem = document.getElementById("username");
    usernameElem.addEventListener("input", function () {
        username = usernameElem.value;
        eel.getBalance(username)(function (_balance) {
            document.getElementById("balance").innerText = _balance;
        });
        eel.nameToAddress(username)((addr) => {
            useraddr = addr;
            updateList();
        });
    });
});

function updateBalance() {
    eel.getBalance(username)(function (_balance) {
        document.getElementById("balance").innerText = _balance;
    });
}

function updateList() {
    fetch("http://0.0.0.0:1317/acre/acre/loc")
        .then((response) => response.json())
        .then((json) => {
            let list = document.getElementById("list");
            list.innerHTML = "";

            json.loc.forEach((item) => {
                let address = item.addr;
                let price1 = parseInt(item.price1.slice(0, -5));
                let price2 = parseInt(item.price2.slice(0, -5));
                let price3 = parseInt(item.price3.slice(0, -5));
                let price = price1 + price2 + price3;

                let div = document.createElement("div");
                div.classList.add("row");

                let eight = document.createElement("div");
                eight.classList.add("eight");
                eight.classList.add("columns");
                eight.appendChild(document.createTextNode(address + ", " + price));

                let four = document.createElement("div");
                four.classList.add("four");
                four.classList.add("columns");

                let input = document.createElement("input");
                input.classList.add("u-full-width");
                input.classList.add("button-primary");
                input.setAttribute("type", "button");

                if (item.status === "1" && item.buyer.trim() === useraddr.trim()) {
                    input.setAttribute("value", "Interim " + price * 0.6);
                    input.addEventListener("click", function () {
                        eel.proceedContract(
                            item.addr,
                            username
                        )(() => {
                            updateList();
                            updateBalance();
                        });
                    });
                } else if (item.status === "2" && item.buyer.trim() === useraddr.trim()) {
                    input.setAttribute("value", "Closure " + price * 0.3);
                    input.addEventListener("click", function () {
                        eel.closeContract(
                            item.addr,
                            username
                        )(() => {
                            updateList();
                            updateBalance();
                        });
                    });
                } else {
                    input.setAttribute("value", "Down " + price * 0.1);
                    input.addEventListener("click", function () {
                        eel.initContract(
                            item.addr,
                            username
                        )(() => {
                            updateList();
                            updateBalance();
                        });
                    });
                }

                four.appendChild(input);
                div.appendChild(eight);
                div.appendChild(four);

                list.appendChild(div);
            });
        });
}

document.getElementById("sell-btn").addEventListener("click", function () {
    let address = document.getElementById("new_address").value;
    let price = document.getElementById("new_price").value;
    price = parseInt(price);

    eel.createContract(address, price * 0.1 + "token", price * 0.5 + "token", price * 0.4 + "token", username)(updateList);
});
