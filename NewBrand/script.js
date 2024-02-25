
document.addEventListener('DOMContentLoaded', async function (e) {

      const lat = 40.10210;
      const lon = 65.37550;
      const APIky = `9e615b6da049a7c16ce8bcbfde6264f0`;
      const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIky}`)
      const res = await req.json();
      console.log(res);
      let span = document.getElementById('span1');
      span.innerHTML = `<span style ="font-size:30px;"><img width="35px" src="./assets/images/weather.png" alt=""></span> ${res.name} da bugun ${Math.floor(res.main.temp - 273.1)}ºc `

      let logo = document.getElementById('logo-tel')
      logo.addEventListener('click',function(e){
        document.getElementById('logo-tel1').style.display='block';
      });

      let big = document.getElementById('big-02');
      big.addEventListener('click', function (e) {
            let nomi = document.getElementById('k-nomi');
            nomi.innerText = `Erke`;
      })
      document.getElementById('big-03').addEventListener('click', function (e) {
            let nomi = document.getElementById('k-nomi');
            nomi.innerText = `No brand`
      })
      document.getElementById('big-04').addEventListener('click', function (e) {
            let nomi = document.getElementById('k-nomi');
            nomi.innerText = `Erke (51118301137-003)`
      })
     document.getElementById('item-02').addEventListener('click', function(e){
      let kostyom =  document.querySelector('.kostyom');
       let ul = document.createElement('ul');
       ul.classList.add('slides');
      ul.innerHTML(`
        <li>
          <img  src="assets/images/kostyom1.jpg" />
        </li>
        <li>
          <img id="big-02" src="assets/images/kostyom2.jpg" />
        </li>
        <li>
          <img id="big-03" src="assets/images/kostyom3.jpg" />
        </li>
        <li>
          <img id="big-04" src="assets/images/kostyom4.jpg" />
        </li>
        <!-- items mirrored twice, total of 12 -->
      `)
      kostyom.append(ul);
     })

})