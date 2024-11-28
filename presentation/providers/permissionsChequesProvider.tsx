import React, { PropsWithChildren, useEffect } from 'react'
import { AppState } from 'react-native'
import { router } from 'expo-router'
import { usePermissionStore } from '../store/usePermissions'
import { PermisionStatus } from '@/infrastructure/interfaces/location'

const PermissionsChequesProvider = ({ children }: PropsWithChildren) => {
    const { locationStatus, checkLocationPermission } = usePermissionStore()

    useEffect(() => {
        if (locationStatus === PermisionStatus.GRANTED) {
            return router.replace('/map')
        } else if (locationStatus != PermisionStatus.CHECKING) {
            router.replace('/permisions')
        }
    }, [locationStatus])


    useEffect(() => {
        checkLocationPermission()
    }, [])

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            if(nextAppState === 'active') {
                checkLocationPermission()
            }
        })

        return () => {
            subscription.remove()
        }
    }, [])


    return (
        <>{children}</>
    )
}

export default PermissionsChequesProvider