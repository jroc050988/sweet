<template>
  <!-- Modal -->
  <div class="modal fade orderModal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-lg" role="document">
      <Form
        class="modal-content border-0"
        v-slot="{
          errors,
        }"
        @submit="onsubmit"
      >
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
            <Field
              type="text"
              class="form-control"
              id="title"
              v-model="cupon.title"
              name="名稱"
              rules="required"
              :class="{ 'is-invalid': errors['名稱'] }"
            ></Field>
            <ErrorMessage name="名稱" class="inputNote"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="percent" class="form-label">
              折扣(%)
            </label>
            <Field
              type="number"
              class="form-control"
              id="percent"
              v-model="cupon.percent"
              rules="required|between:1,100"
              name="折扣"
              :class="{ 'is-invalid': errors['折扣'] }"
            ></Field>
            <ErrorMessage name="折扣" class="inputNote"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="due_date" class="form-label">
              到期日
            </label>
            <Field
              type="date"
              class="form-control"
              id="due_date"
              v-model="cupon.due_date"
              rules="required"
              name="到期日"
              :class="{ 'is-invalid': errors['到期日'] }"
              ref="dateInput"
              :min="$filter.getDate(new Date())"
            ></Field>
            <ErrorMessage name="到期日" class="inputNote"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="code" class="form-label">
              優惠序號
            </label>
            <Field
              type="text"
              class="form-control"
              id="code"
              v-model="cupon.code"
              rules="required"
              name="優惠序號"
              :class="{ 'is-invalid': errors['優惠序號'] }"
            ></Field>
            <ErrorMessage name="優惠序號" class="inputNote"></ErrorMessage>
          </div>
          <div class="mb-3">
            <div class="form-check form-switch">
              <label
                class="form-check-label"
                for="flexSwitchCheckDefault"
                v-if="cupon.is_enabled == 1"
              >
                已啟用
              </label>
              <label
                class="form-check-label"
                for="flexSwitchCheckDefault"
                v-else
              >
                未啟用
              </label>
              <input
                :true-value="1"
                :false-value="0"
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                v-model="cupon.is_enabled"
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
          <button class="btn btn-primary">確認</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import modal from '@/mixins/bsmodal';

export default {
  mixins: [modal],
  data() {
    return {
      cupon: {},
    };
  },
  props: {
    couponData: {
      type: Object,
      defalut() {
        return {};
      },
    },
  },
  watch: {
    couponData() {
      if (this.couponData.is_enabled) {
        this.cupon = {
          ...this.couponData,
          due_date: this.$filter.getDate(this.couponData.due_date),
        };
      } else {
        this.cupon = {
          ...this.couponData,
          is_enabled: 0,
        };
      }
    },
  },
  methods: {
    onsubmit() {
      const data = {
        ...this.cupon,
        due_date: this.$filter.getStemp(this.cupon.due_date),
        percent: Number(100 - this.cupon.percent),
      };
      this.$emit('update', data);
    },
  },
};
</script>
