import { useDispatch, useSelector } from 'react-redux'
import { fetchPaymentDetailAsync } from '../../store/payment/detail/payment-detail.actions'

export const usePaymentDetail = () => {
  const dispatch = useDispatch()
  const { loader, error, detail } = useSelector(({ paymentDetail }) => paymentDetail)

  const fetchDetail = () => {
    if (!loader && !detail) {
      dispatch(fetchPaymentDetailAsync())
    }
  }

  const canPay = !error && detail

  return {
    loader,
    error,
    detail,
    canPay,
    fetchDetail
  }
}