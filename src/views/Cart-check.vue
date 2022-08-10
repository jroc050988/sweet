<template>
  <div class="pageInner cartPage cartCheckPage">
    <div class="container">
      <div class="cartListBox">
        <div class="titleBox">
          <span class="titleEn">Check</span>
          <h2 class="title wow fadeInUp" data-wow-delay="250ms">
            <span>資</span>料填寫
          </h2>
        </div>
        <p></p>
        <form class="infoFrom">
          <div class="mb-3">
            <label for="name" class="form-label">
              訂購人姓名
              <span class="tag">必填</span>
            </label>
            <input type="email" class="form-control" id="name" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              聯絡電子信箱
              <span class="tag">必填</span>
            </label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">
              聯絡電話
              <span class="tag">必填</span>
            </label>
            <input type="email" class="form-control" id="tel" />
          </div>
          <div class="mb-3">
            <label for="add" class="form-label">
              收件地址
              <span class="tag">必填</span>
            </label>
            <input type="email" class="form-control" id="add" />
          </div>
          <div class="mb-3">
            <label for="massages" class="form-label">
              備註
            </label>
            <textarea class="form-control" id="massages" rows="3"></textarea>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              我已確認資料填寫無誤，並已詳細閱讀<a href="" title="">銷售條款</a>。 <span class="tag">必填</span>
            </label>
          </div>
        </form>
      </div>
      <div class="cartTotalBox">
        <div>
          <div class="cartItem" v-for="item in 3" :key="item">
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
        <div class="btnBox nextStep">
          <button type="button" class="btn btn-outline-primary mr-2">
            上一步
          </button>
          <button type="button" class="btn btn-primary mr-2">
            去結帳
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
