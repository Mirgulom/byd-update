export interface CarModel {
    id: string;
    name: string;
    type: 'sedan' | 'suv' | 'crossover' | 'hatchback';
    engineType: 'electric' | 'hybrid' | 'petrol';
    badge?: 'new' | 'bestseller' | 'electric';
    image: string;
    images?: string[];
    specs: {
        power: string;
        acceleration: string;
        range: string;
        battery?: string;
        seats?: number;
    };
    price: string;
    priceValue: number;
    year: number;
    description?: string;
    features?: string[];
}

export const allModels: CarModel[] = [
    {
        id: 'seal',
        name: 'BYD Seal',
        type: 'sedan',
        engineType: 'electric',
        badge: 'electric',
        image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&h=600&fit=crop',
        specs: {
            power: '530 HP',
            acceleration: '3.8s',
            range: '650 km',
            battery: '82.5 kWh',
            seats: 5,
        },
        price: '450,000,000',
        priceValue: 450000000,
        year: 2024,
        description: 'Premium electric sedan with cutting-edge technology',
    },
    {
        id: 'tang',
        name: 'BYD Tang',
        type: 'suv',
        engineType: 'hybrid',
        badge: 'bestseller',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
        specs: {
            power: '517 HP',
            acceleration: '4.4s',
            range: '600 km',
            battery: '86.4 kWh',
            seats: 7,
        },
        price: '550,000,000',
        priceValue: 550000000,
        year: 2024,
        description: 'Powerful 7-seater SUV with hybrid technology',
    },
    {
        id: 'han',
        name: 'BYD Han',
        type: 'sedan',
        engineType: 'electric',
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
        specs: {
            power: '380 HP',
            acceleration: '3.9s',
            range: '605 km',
            battery: '85.4 kWh',
            seats: 5,
        },
        price: '520,000,000',
        priceValue: 520000000,
        year: 2024,
        description: 'Luxury flagship sedan with premium comfort',
    },
    {
        id: 'atto-3',
        name: 'BYD Atto 3',
        type: 'crossover',
        engineType: 'electric',
        badge: 'electric',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        specs: {
            power: '204 HP',
            acceleration: '7.3s',
            range: '480 km',
            battery: '60.5 kWh',
            seats: 5,
        },
        price: '350,000,000',
        priceValue: 350000000,
        year: 2024,
        description: 'Compact electric crossover for urban lifestyle',
    },
    {
        id: 'dolphin',
        name: 'BYD Dolphin',
        type: 'hatchback',
        engineType: 'electric',
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
        specs: {
            power: '177 HP',
            acceleration: '7.5s',
            range: '427 km',
            battery: '60.5 kWh',
            seats: 5,
        },
        price: '280,000,000',
        priceValue: 280000000,
        year: 2024,
        description: 'Stylish compact electric hatchback',
    },
    {
        id: 'song-plus',
        name: 'BYD Song Plus',
        type: 'suv',
        engineType: 'hybrid',
        badge: 'bestseller',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
        specs: {
            power: '295 HP',
            acceleration: '6.9s',
            range: '550 km',
            battery: '71.7 kWh',
            seats: 5,
        },
        price: '420,000,000',
        priceValue: 420000000,
        year: 2024,
        description: 'Versatile hybrid SUV for family adventures',
    },
    {
        id: 'yuan-plus',
        name: 'BYD Yuan Plus',
        type: 'crossover',
        engineType: 'electric',
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop',
        specs: {
            power: '204 HP',
            acceleration: '7.3s',
            range: '430 km',
            battery: '60.5 kWh',
            seats: 5,
        },
        price: '330,000,000',
        priceValue: 330000000,
        year: 2024,
        description: 'Efficient electric crossover with modern design',
    },
    {
        id: 'qin-plus',
        name: 'BYD Qin Plus',
        type: 'sedan',
        engineType: 'hybrid',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
        specs: {
            power: '197 HP',
            acceleration: '7.3s',
            range: '600 km',
            battery: '57.6 kWh',
            seats: 5,
        },
        price: '310,000,000',
        priceValue: 310000000,
        year: 2024,
        description: 'Elegant hybrid sedan with excellent fuel efficiency',
    },
];

export const popularModels = allModels.slice(0, 6);

export const getModelById = (id: string) => allModels.find(m => m.id === id);

export const getModelsByType = (type: string) =>
    allModels.filter(m => m.type === type);

export const getModelsByEngine = (engineType: string) =>
    allModels.filter(m => m.engineType === engineType);
