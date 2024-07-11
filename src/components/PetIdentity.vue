<template>
    <div class="pet-vaccine-card">
        <div class="card-header">
            <img src="../../public/assets/icons/favicon.svg" class="logo" />
            <p>Adopets</p>
        </div>
        <div class="card-content">
            <slot></slot>
        </div>
        <div class="card-footer">
            <p>Responsável: <span>{{ responsibleName }}</span></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pet: Object,
        imgSrc: String,
        responsibleName: String
    }
};
</script>

<style lang="scss">
.pet-vaccine-card {
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, rgba(0, 170, 255, 1) 0%, rgba(0, 51, 102, 1) 50%, rgba(0, 34, 51, 1) 100%);
    width: 100%;
    height: 250px;
    align-items: center;
    // background-image: url("../../public/assets/img/bgPetIdentity.jpg");

    .card-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 0px;

        .logo {
            width: 45px;
            height: auto;
        }

        p {
            font: 700 24px / 24px var(--title-font);
            color: var(--c1);
        }
    }

    .card-content {
        display: flex;
        gap: 10px;
        align-items: center;

        img {
            width: 190px;
            height: 130px;
            object-fit: cover;
            border-radius: 10px;
        }

        .cardInfo {
            width: 100%;

            .petName {
                font-size: 36px;
                color: var(--c1);
                margin-bottom: 10px;
            }

            .row {
                display: flex;
                gap: 10px;
                justify-content: space-between;
            }

            .row:nth-child(3) {
                padding-top: 10px;
            }

            .petTag {
                font: 400 10px / 10px var(--body-font);
                color: var(--c1);
                display: flex;
                flex-direction: column;
                padding: 2px 6px;
                border-radius: 5px;
                background-color: var(--p1);

                span {
                    font: 500 14px / 20px var(--body-font);
                    color: var(--p6);
                }
            }
        }
    }

    .card-footer {
        padding: 5px 0px;

        p {
            display: flex;
            flex-direction: column;
            font-size: 12px;

            span {
                margin-top: 2px;
                font: 500 16px / 16px var(--body-font);
                color: var(--c1);
            }
        }
    }


}
</style>