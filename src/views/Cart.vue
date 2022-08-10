<template>
  <div class="pageInner cartPage">
    <div class="container">
      <div class="cartListBox">
        <div class="titleBox">
          <span class="titleEn">Cart</span>
          <h2 class="title wow fadeInUp" data-wow-delay="250ms">
            <span>購</span>物清單
          </h2>
        </div>
        <div class="cartListTitle">
          <p style="width: 20%;">圖片</p>
          <p style="width: 30%;">品名</p>
          <p style="width: 14%;">單價</p>
          <p style="width: 14%;">數量</p>
          <p style="width: 14%;">小計</p>
          <p style="width: 8%;">刪除</p>
        </div>
        <div class="cartList">
          <div class="cartItem" v-for="item in 1" :key="item">
            <figure class="imgBox">
              <router-link to="product">
                <img src="@/assets/img/demo01.jpg" alt="" class="img-fluid" />
              </router-link>
            </figure>
            <p class="pdtName">南瓜粥</p>
            <p class="pdtPrice">¥ 2,148</p>
            <div class="btnBox">
              <button
                type="button"
                class="btn btn-outline-primary mr-2 border-end-0"
              >
                <font-awesome-icon icon="fa-solid fa-plus" />
              </button>
              <input type="number" class="numInput" min="1" value="1" />
              <button
                type="button"
                class="btn btn-outline-primary mr-2 border-start-0"
              >
                <font-awesome-icon icon="fa-solid fa-minus" />
              </button>
            </div>
            <p class="pdtTotal">¥ 2,148</p>
            <a href="#" title="刪除" class="pdtDelete">
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </a>
          </div>
        </div>
      </div>
      <div class="cartTotalBox">
        <div class="cartTotalInner">
          <div class="btnBox">
            <input
              type="text"
              class="couponInput"
              placeholder="請輸入優惠代碼"
            />
            <button
              type="button"
              class="btn btn-outline-primary mr-2 border-start-0 couponBtn"
            >
              套用
            </button>
          </div>
          <small class="note">
            <font-awesome-icon icon="fa-solid fa-circle-xmark" />
            尚未套用優惠券
          </small>
          <!-- <small class="note-ok">
          <font-awesome-icon icon="fa-solid fa-circle-check" />
          已套用優惠券
        </small> -->
          <div class="cartTotalItem my-2">
            <p class="title">總價</p>
            <p>¥ 2,148</p>
          </div>
          <div class="cartTotalItem">
            <p class="title">運費</p>
            <p>¥ 1,000</p>
          </div>
          <hr />
          <div class="cartTotalItem">
            <p class="title">結算</p>
            <p>¥ 1,000</p>
          </div>
          <div class="btnBox nextStep">
            <button type="button" class="btn btn-outline-primary mr-2">
            繼續看
          </button>
            <button type="button" class="btn btn-primary mr-2">
              下一步
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
