import { create } from 'zustand'
import { PermisionStatus } from '@/infrastructure/interfaces/location'
import { checkLocationPermission, requestLocationPermission } from '@/core/actions/permisions/location';

interface PermissionsState {
    locationStatus: PermisionStatus,
    requestLocationPermission: () => Promise<PermisionStatus>;
    checkLocationPermission: () => Promise<PermisionStatus>;
}

export const usePermissionStore = create<PermissionsState>()((set) => ({
    locationStatus: PermisionStatus.CHECKING,

    requestLocationPermission: async () => {
        const status = await requestLocationPermission();
        set({ locationStatus: status })
        return status
    },
    checkLocationPermission: async () => {
        const status = await checkLocationPermission();
        set({ locationStatus: status })
        return status
    }
}))