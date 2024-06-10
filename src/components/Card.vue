<template>
  <div class="card">
    <slot name="image" class="card-image-container" v-if="$slots.image"></slot>
    <div class="card_content">
      <slot name="card_top" v-if="$slots.card_top">
        <p class="text_body">{{ title }}</p>
      </slot>
      <p class="card_date" v-if="$slots.date || date !== 'dd/mm/aaaa'">
        <slot name="date">{{ date }}</slot>
      </p>
      <p class="card-description" v-if="$slots.description || description !== 'Default Description'">
        <slot name="description">
          <p class="text_body">{{ description }}</p>
        </slot>
      </p>
      <div class="card-button" v-if="$slots.button || shouldShowButton">
        <slot name="button">
          <router-link v-if="shouldShowButton" :to="{ name: 'PostPage', params: { url } }">
            <div class="btn">Ver Mais</div>
          </router-link>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Default Title",
    },
    description: {
      type: String,
      default: "Default Description",
    },
    date: {
      type: String,
      default: "dd/mm/aaaa",
    },
    url: {
      type: String,
      default: "",
    },
  },
  computed: {
    shouldShowButton() {
      console.log("URL in shouldShowButton:", this.url);
      const result = Boolean(this.url);
      console.log("Result in shouldShowButton:", result);
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-3);
  box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.1);

  &_content {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .text_body {
      margin-top: 0px;
    }

    .card_date {
      font: var(--cardtag-font-composite);
    }
  }

  &-button {
    .btn {
      background-color: var(--color-1);
      color: #fff;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
      text-align: center;

      &:hover {
        background-color: var(--color-2);
      }
    }
  }
}
</style>
