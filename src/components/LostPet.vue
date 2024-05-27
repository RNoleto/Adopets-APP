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
    }
  }
}
</style>
