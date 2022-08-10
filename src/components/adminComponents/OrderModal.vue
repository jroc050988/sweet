<template>
  <!-- Modal -->
  <div class="modal fade orderModal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header">
          <p class="modalTitle">
            <span>訂單編號: 20220810</span>
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
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
              <div class="mb-3">
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
              <div class="mb-3">
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
            </div>
            <div class="col-sm-8">
              <div class="orderItem orderTitle">
                <p class="pdtName">名稱</p>
                <p class="pdtPrice">單價</p>
                <p class="pdtNum">數量</p>
                <p class="pdtTotal">小計</p>
              </div>
              <div class="orderItem">
                <p class="pdtName">南瓜粥</p>
                <p class="pdtPrice">¥ 2,148</p>
                <p class="pdtNum">1</p>
                <p class="pdtTotal">¥ 2,148</p>
              </div>
              <div class="orderItem">
                <p class="pdtName">南瓜粥</p>
                <p class="pdtPrice">¥ 2,148</p>
                <p class="pdtNum">1</p>
                <p class="pdtTotal">¥ 2,148</p>
              </div>
              <div class="orderTotal">
                <div class="orderItem">
                  <p class="title">總價</p>
                  <p>¥ 2,148</p>
                </div>
                <div class="orderItem">
                  <p class="title">運費</p>
                  <p>¥ 2,148</p>
                </div>
                <div class="orderItem">
                  <p class="title">結算</p>
                  <p>¥ 2,148</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '@/mixins/bsmodal';

export default {
  mixins: [modal],
};
</script>
