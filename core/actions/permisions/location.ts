import { PermisionStatus } from '@/infrastructure/interfaces/location'
import * as Location from 'expo-location'
import { Alert, Linking } from 'react-native'

export const requestLocationPermission = async (): Promise<PermisionStatus> => {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status != 'granted') {
        if (status === 'denied') {
            manualPermissionRequest();
        }
        return PermisionStatus.DENIED
    }

    return PermisionStatus.GRANTED
}

export const checkLocationPermission = async () => {
    const { status } = await Location.getForegroundPermissionsAsync()
    switch (status) {
        case 'granted':
            return PermisionStatus.GRANTED
        case 'denied':
            return PermisionStatus.DENIED
        default:
            return PermisionStatus.UNDETERMINED
    }
}

export const manualPermissionRequest = async () => {
    //lanzar ajustes de la app
    Alert.alert(
        //titulo
        'Permisos de ubicación',
        //descripcion
        'Para utilizar esta app, necesitamos los permisos de ubicación.',
        //botones
        [
            { text: 'Ir a ajustes', onPress: () => Linking.openSettings() },
            { text: 'Cancelar', style: 'destructive' },
        ],
    )
}