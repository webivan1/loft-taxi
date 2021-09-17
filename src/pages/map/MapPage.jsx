import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { OrderForm } from '../../components/order/OrderForm'
import { useEffect, useState } from 'react'
import { OrderSuccess } from '../../components/order/OrderSuccess'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddresses } from '../../store/address/address.actions'
import { fetchRoutesAsync, routesReset } from '../../store/route/route.actions'
import { usePaymentDetail } from '../../components/payment/usePaymentDetail'
import { OrderCanceled } from '../../components/order/OrderCanceled'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '486px',
    boxSizing: 'border-box',
    boxShadow: '0px 10px 20px -5px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    position: 'relative',
    zIndex: 2
  },
})

export const MapPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const addressList = useSelector(({ address }) => address.list)
  const isShowRoute = useSelector(({ route }) => route.map && route.map.length > 0)
  const { detail, loader, canPay, fetchDetail } = usePaymentDetail();

  const handleSubmittedForm = (form) => {
    dispatch(fetchRoutesAsync(form))
  }

  const handleResetSubmit = () => {
    dispatch(routesReset())
  }

  useEffect(() => {
    !addressList.length && dispatch(fetchAddresses())
    !loader && !detail && fetchDetail();
  }, [dispatch])

  return (
    <Paper className={classes.root}>
      {!canPay ? (
        <OrderCanceled />
      ) : (
        <>
          {isShowRoute ? (
            <OrderSuccess onReset={handleResetSubmit} />
          ) : (
            <OrderForm onSubmit={handleSubmittedForm} />
          )}
        </>
      )}
    </Paper>
  )
}