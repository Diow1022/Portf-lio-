console.log("Portfólio de Jonatas Nascimento carregado com sucesso! 🚀");

// Efeito simples ao aparecerem elementos na tela

const cards = document.querySelectorAll(
".project-card, .skill-card"
);

const observer = new IntersectionObserver(
(entries) => {

```
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},
{
    threshold: 0.1
}
```

);

cards.forEach((card) => {

```
card.style.opacity = "0";
card.style.transform = "translateY(30px)";
card.style.transition = "0.6s";

observer.observe(card);
```

});
