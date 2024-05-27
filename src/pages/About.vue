<template>
  <div class="container">
    <section class="content">
      <h1 class="title">Sobre Nós</h1>
      <img class="img" src="https://media.istockphoto.com/id/1456113976/pt/foto/dog-kiss-and-child-outdoor-with-a-love-hug-care-and-animal-friend-care-for-new-family-puppy.webp?b=1&s=170667a&w=0&k=20&c=2JViQx_BpMokHCOef2Oa-wfD6_twgeVBsRBmlAmn7PM=" alt="">
      <p class="text_body">Somos muito mais do que apenas uma plataforma de adoção de animais; somos uma comunidade comprometida com o bem-estar e felicidade dos nossos amigos de quatro patas, e com a promoção da adoção responsávelde pets. Acreditamos firmemente que cada patinha merece um lar amoroso e seguro, e é esse princípio que orienta cada uma das nossas ações.</p>
      <p class="text_body">Na Adopets, não se trata apenas de encontrar um novo membro para sua família, mas sim de criar um elo duradouro e significativo entre humanos e animais. Estamos empenhados em fazer a diferença na vidadesses animais e no mundo que compartilhamos, pois acreditamos que cada adoção é uma pequena revolução, uma chance para um pet encontrar sua felicidade e um lar verdadeiro.</p>
      <p class="text_body">Nosso compromisso com o bem-estar animal vai além da adoção. Oferecemos suporte contínuo aos nossos adotantes e promovemos práticas saudáveis de cuidado e convivência com os animais. Na Adopets, vocêencontrará não apenas um serviço, mas sim uma comunidade dedicada, apaixonada e solidária, pronta para ajudar você e seu pet em todas as etapas da jornada.</p>
      <p class="text_body">Junte-se a nós na missão de tornar o mundo um lugar melhor para todos os seres vivos. Seja parte da família Adopets e faça parte dessa mudança positiva. Juntos, podemos transformar vidas e encher o mundocom mais amor, compaixão e alegria, uma patinha de cada vez.</p>
      <p class="text_body">Seja bem-vindo à Adopets, onde o amor encontra seu lar.</p>
    </section>
    <section class="content">
      <h3 class="title">Porque Adotar?</h3>
      <img class="img" src="https://media.istockphoto.com/id/1250060339/pt/foto/dog-shelter.webp?b=1&s=170667a&w=0&k=20&c=kW257PyZy5coanYUY_KC2tKRQb4PQ97qHNwUJnIeDzk=" alt="">
      <p class="text_body"><span class="topic">1 - Salvar uma vida: </span>Ao adotar um pet de um abrigo ou organização de resgate, você está dando a esse animal uma segunda chance de ter uma vida feliz e amorosa.</p>
      <p class="text_body"><span class="topic">2 - Reduzir o número de animais abandonados: </span>Ao adotar um pet, você está ajudando a reduzir o número de animais abandonados e superlotando abrigos e resgates.</p>
      <p class="text_body"><span class="topic">3 - Acompanhia e amizade: </span>Animais adotados são extremamente gratos e amorosos com seus novos donos, proporcionando uma companhia inestimável e uma amizade sincera.</p>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.container{
  padding: 10px 0px;
  .content{
    .title{
      color: var(--c11);
      position: relative;
      margin-left: 10px;
      &::before{
        content: "";
        position: absolute;
        width: 8px;
        height: 70px;
        background-color: var(--p1);
        margin-left: -10px;
      }
    }
    .img{
      margin-top: 20px;
      object-position: center;
      object-fit: cover;
      height: 400px;
      border-radius: 10px;
      box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: .1);
    }
    .topic{
      color: var(--c12) !important;
      font-weight: bold;
    }
    .text_body{
      color: var(--c10);
    }
  }
}
</style>
