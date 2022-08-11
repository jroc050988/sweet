<template>
  <div class="pageInner orderPage">
    <div class="container">
      <div class="titleBox">
        <span class="titleEn">Order</span>
        <h2 class="title wow fadeInUp" data-wow-delay="250ms">
          <span>訂</span>單搜尋
        </h2>
      </div>
      <div class="btnBox orderSearch">
        <input type="text" class="orderInput" placeholder="請輸入訂單編號" />
        <button
          type="button"
          class="btn btn-primary mr-2 border-start-0 orderBtn"
        >
          搜尋
        </button>
      </div>
      <div class="orderInfo">
        <div class="orderInfoList">
          <div>訂單編號: 20220810</div>
          <div>訂單日期: 2022/08/10</div>
          <div>付款方式: ATM轉帳</div>
        </div>
        <div class="cartTotalBox">
          <div>
            <div class="cartItem">
              <p class="pdtName">南瓜粥</p>
              <p class="pdtNum">1</p>
              <p class="pdtTotal">¥ 2,148</p>
            </div>
            <div class="cartItem">
              <p class="pdtName">南瓜粥</p>
              <p class="pdtNum">1</p>
              <p class="pdtTotal">¥ 2,148</p>
            </div>
            <div class="cartItem">
              <p class="pdtName">南瓜粥</p>
              <p class="pdtNum">1</p>
              <p class="pdtTotal">¥ 2,148</p>
            </div>
          </div>
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
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">
            訂購人姓名
          </label>
          <input
            type="email"
            class="form-control"
            id="name"
            value="翁莉莉"
            readonly
          />
        </div>
        <div class="row">
          <div class="mb-3 col-md-6">
            <label for="email" class="form-label">
              聯絡電子信箱
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              value="lili@gmail.com"
              readonly
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="tel" class="form-label">
              聯絡電話
            </label>
            <input
              type="email"
              class="form-control"
              id="tel"
              value="0952331445"
              readonly
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="add" class="form-label">
            收件地址
          </label>
          <input
            type="email"
            class="form-control"
            id="add"
            value="三重市三重區三和路4段20巷28號7樓"
            readonly
          />
        </div>
        <div class="mb-3">
          <label for="massages" class="form-label">
            備註
          </label>
          <textarea
            class="form-control"
            id="massages"
            rows="3"
            readonly
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
