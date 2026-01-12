'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { allModels } from '@/lib/data/models';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function CalculatorPage() {
    const t = useTranslations();

    const [selectedModel, setSelectedModel] = useState(allModels[0].id);
    const [carPrice, setCarPrice] = useState(allModels[0].priceValue);
    const [initialPaymentPercent, setInitialPaymentPercent] = useState(30);
    const [loanTerm, setLoanTerm] = useState(12);
    const [interestRate] = useState(24); // 24% annual interest rate

    useEffect(() => {
        const model = allModels.find(m => m.id === selectedModel);
        if (model) {
            setCarPrice(model.priceValue);
        }
    }, [selectedModel]);

    // Calculations
    const initialPaymentAmount = (carPrice * initialPaymentPercent) / 100;
    const loanAmount = carPrice - initialPaymentAmount;
    const monthlyRate = interestRate / 12 / 100;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
    const totalPayment = (monthlyPayment * loanTerm) + initialPaymentAmount;
    const overpayment = (monthlyPayment * loanTerm) - loanAmount;

    const chartData = [
        { name: 'Initial Payment', value: initialPaymentAmount, color: '#C41E3A' }, // Primary red
        { name: 'Loan Amount', value: loanAmount, color: '#1F2937' }, // Secondary dark
        { name: 'Interest', value: overpayment, color: '#9CA3AF' }, // Gray
    ];

    const formatMoney = (amount: number) => {
        return new Intl.NumberFormat('uz-UZ', {
            style: 'currency',
            currency: 'UZS',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-4">{t('nav.calculator')}</h1>
                <p className="text-muted-foreground mb-8">
                    Calculate your monthly payments and find the best financing option for your new BYD.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Calculator Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Loan Parameters</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="space-y-4">
                                <Label>Select Model</Label>
                                <Select value={selectedModel} onValueChange={setSelectedModel}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {allModels.map((model) => (
                                            <SelectItem key={model.id} value={model.id}>
                                                {model.name} - {formatMoney(model.priceValue)}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <Label>Initial Payment</Label>
                                    <span className="font-bold">{initialPaymentPercent}% ({formatMoney(initialPaymentAmount)})</span>
                                </div>
                                <Slider
                                    min={15}
                                    max={80}
                                    step={5}
                                    value={[initialPaymentPercent]}
                                    onValueChange={(val) => setInitialPaymentPercent(val[0])}
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <Label>Loan Term</Label>
                                    <span className="font-bold">{loanTerm} months</span>
                                </div>
                                <Slider
                                    min={12}
                                    max={60}
                                    step={12}
                                    value={[loanTerm]}
                                    onValueChange={(val) => setLoanTerm(val[0])}
                                />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>1 year</span>
                                    <span>5 years</span>
                                </div>
                            </div>

                            <div className="p-4 bg-muted rounded-lg">
                                <div className="flex justify-between mb-2">
                                    <span>Interest Rate</span>
                                    <span className="font-bold">{interestRate}%</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    * Annual interest rate provided by partner banks. Subject to change.
                                </p>
                            </div>

                            <Button className="w-full text-lg h-12">
                                Apply for Loan
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Results Visualization */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Calculation Results</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-center">
                            <div className="h-[300px] w-full mb-8">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            formatter={(value) => formatMoney(value as number)}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="text-sm text-muted-foreground mb-1">Monthly Payment</div>
                                    <div className="text-4xl font-bold text-primary">
                                        {formatMoney(monthlyPayment)}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                                    <div>
                                        <div className="text-sm text-muted-foreground">Total Payment</div>
                                        <div className="font-semibold">{formatMoney(totalPayment)}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-muted-foreground">Overpayment</div>
                                        <div className="font-semibold text-destructive">{formatMoney(overpayment)}</div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
