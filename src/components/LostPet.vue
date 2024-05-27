<template>
  <div class="container">
    <div class="content">
      <p class="title">Achados e Perdidos.</p>
      <p class="text_body">Esses pets estão perdidos e sozinhos em algum lugar, ajude a encontra-los.</p>
      <button>Ver mais posts</button>
      <div class="pets_galery">
        <div class="card">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhZ2xlfGVufDB8fDB8fHww"
            alt="pet perdido">
            <div class="card_infos">
              <p class="name">Marley</p>
              <div class="details">
                <span class="info"><img src="../../public/assets/icons/male.svg" class="icon" alt="icon"> <p>Macho</p></span>
                <span class="info"><img src="../../public/assets/icons/event_available.svg" class="icon" alt="icon"><p>2 anos</p></span>
                <span class="info"><img src="../../public/assets/icons/location.svg" class="icon" alt="icon"><p>Centro, Itajaí - SC</p></span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.container {
  background-color: var(--p5);

  .content {
    .text_body {
      width: 500px;
    }

    .pets_galery {
      display: flex;
      gap: 40px;
      margin-top: 20px;
      .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 360px;
        img{
          width: 320px;
        }
        &_infos{
          width: 360px;
          padding: 20px;
          border-radius: 5px;
          background-color: var(--p6);
          .name{
            color: var(--c1);
            font: var(--cardtitle-font-composite);
          }
          .details{
            margin-top: 10px;
            color: var(--c5);
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .info{
              width: 50%;
              display: flex;
              gap: 5px;
              padding: 2px 0px;
              .icon{
                width: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
