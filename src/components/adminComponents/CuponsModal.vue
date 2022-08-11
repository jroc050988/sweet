<template>
  <!-- Modal -->
  <div class="modal fade orderModal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content border-0">
        <div class="modal-header">
          <p class="modalTitle">
            <span>新增/編輯優惠券</span>
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title" class="form-label">
              名稱
            </label>
            <input type="text" class="form-control" id="title" value="優惠券" />
          </div>
          <div class="mb-3">
            <label for="percent" class="form-label">
              折扣(%)
            </label>
            <input type="number" class="form-control" id="percent" value="80" />
          </div>
          <div class="mb-3">
            <label for="due_date" class="form-label">
              到期日
            </label>
            <input
              type="date"
              class="form-control"
              id="due_date"
              value="2022-08-10"
            />
          </div>
          <div class="mb-3">
            <label for="code" class="form-label">
              優惠序號
            </label>
            <input
              type="text"
              class="form-control"
              id="code"
              value="Lili20220810"
            />
          </div>
          <div class="mb-3">
            <div class="form-check form-switch">
              <label class="form-check-label" for="flexSwitchCheckDefault">
                未啟用
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
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
