import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  DollarSign, 
  CreditCard, 
  Banknote, 
  Smartphone,
  Settings,
  ArrowLeft,
  Check,
  X,
  AlertCircle
} from 'lucide-react';

const PaymentSettings = () => {
  const { t } = useLanguage();
  const [settings, setSettings] = useState({
    stripeEnabled: true,
    paypalEnabled: true,
    cryptoEnabled: false,
    bankTransferEnabled: true,
    defaultCurrency: 'USD',
    taxRate: 10,
    minimumPayment: 10,
    refundPolicy: 'flexible',
    autoRefund: false
  });

  // Mock payment methods data
  const paymentMethods = [
    { id: 'stripe', name: 'Stripe', icon: CreditCard, status: 'connected', description: 'Credit/Debit Cards' },
    { id: 'paypal', name: 'PayPal', icon: Smartphone, status: 'connected', description: 'PayPal Account' },
    { id: 'crypto', name: 'Cryptocurrency', icon: Banknote, status: 'disconnected', description: 'Bitcoin, Ethereum' },
    { id: 'bank', name: 'Bank Transfer', icon: Banknote, status: 'pending', description: 'Direct Bank Transfer' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">{t('connected')}</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">{t('pending')}</Badge>;
      case 'disconnected':
        return <Badge variant="secondary">{t('disconnected')}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleSave = () => {
    alert(t('settingsSaved'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <Link to="/admin">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('backToAdmin')}
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {t('paymentSettings')}
                </h1>
                <p className="text-muted-foreground">{t('managePaymentDescription')}</p>
              </div>
            </div>
            <Button onClick={handleSave} className="gap-2">
              <Settings className="h-4 w-4" />
              {t('saveSettings')}
            </Button>
          </div>

          {/* Payment Methods */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                {t('paymentMethods')}
              </CardTitle>
              <CardDescription>
                {t('paymentMethodsDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-muted rounded-lg">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">{method.name}</h3>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {getStatusBadge(method.status)}
                        <Switch
                          checked={settings[`${method.id}Enabled` as keyof typeof settings] as boolean}
                          onCheckedChange={(checked) => 
                            setSettings({...settings, [`${method.id}Enabled`]: checked})
                          }
                        />
                        <Button variant="outline" size="sm">
                          {method.status === 'connected' ? t('configure') : t('connect')}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Currency & Pricing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                {t('currencyPricing')}
              </CardTitle>
              <CardDescription>
                {t('currencyPricingDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="currency">{t('defaultCurrency')}</Label>
                  <Select value={settings.defaultCurrency} onValueChange={(value) => setSettings({...settings, defaultCurrency: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('selectCurrency')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                      <SelectItem value="RUB">RUB - Russian Ruble</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="taxRate">{t('taxRate')} (%)</Label>
                  <Input
                    id="taxRate"
                    type="number"
                    value={settings.taxRate}
                    onChange={(e) => setSettings({...settings, taxRate: parseInt(e.target.value)})}
                    min="0"
                    max="100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="minimumPayment">{t('minimumPayment')}</Label>
                  <Input
                    id="minimumPayment"
                    type="number"
                    value={settings.minimumPayment}
                    onChange={(e) => setSettings({...settings, minimumPayment: parseInt(e.target.value)})}
                    min="1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="refundPolicy">{t('refundPolicy')}</Label>
                  <Select value={settings.refundPolicy} onValueChange={(value) => setSettings({...settings, refundPolicy: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('selectRefundPolicy')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strict">{t('strict')}</SelectItem>
                      <SelectItem value="moderate">{t('moderate')}</SelectItem>
                      <SelectItem value="flexible">{t('flexible')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transaction Settings */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t('transactionSettings')}</CardTitle>
              <CardDescription>
                {t('transactionSettingsDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{t('autoRefund')}</h3>
                    <p className="text-sm text-muted-foreground">{t('autoRefundDescription')}</p>
                  </div>
                  <Switch
                    checked={settings.autoRefund}
                    onCheckedChange={(checked) => setSettings({...settings, autoRefund: checked})}
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">{t('totalRevenue')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,680</div>
                      <p className="text-xs text-green-600">+12.5% {t('fromLastMonth')}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">{t('successfulPayments')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">98.7%</div>
                      <p className="text-xs text-muted-foreground">1,247 {t('transactions')}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">{t('refundRate')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2.1%</div>
                      <p className="text-xs text-muted-foreground">26 {t('refunds')}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">{t('securityNotice')}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('securityNoticeDescription')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSettings;