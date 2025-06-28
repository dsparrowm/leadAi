import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DashboardLayout from '@/components/DashboardLayout';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    status: 'ACTIVE',
    platform: 'LINKEDIN',
    budget: '',
    startDate: '',
    endDate: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // TODO: Replace with actual API call
      // await api.createCampaign(form);
      navigate('/campaigns');
    } catch (err) {
      setError('Failed to create campaign.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-xl mx-auto mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Create New Campaign</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Campaign Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <div className="flex gap-4">
                <Select value={form.status} onValueChange={v => handleSelect('status', v)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACTIVE">Active</SelectItem>
                    <SelectItem value="PAUSED">Paused</SelectItem>
                    <SelectItem value="DRAFT">Draft</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={form.platform} onValueChange={v => handleSelect('platform', v)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LINKEDIN">LinkedIn</SelectItem>
                    <SelectItem value="TWITTER">Twitter</SelectItem>
                    <SelectItem value="FACEBOOK">Facebook</SelectItem>
                    <SelectItem value="MULTI_PLATFORM">Multi-platform</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input
                name="budget"
                type="number"
                placeholder="Budget ($)"
                value={form.budget}
                onChange={handleChange}
                required
              />
              <div className="flex gap-4">
                <Input
                  name="startDate"
                  type="date"
                  placeholder="Start Date"
                  value={form.startDate}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="endDate"
                  type="date"
                  placeholder="End Date"
                  value={form.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Creating...' : 'Create Campaign'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CreateCampaign;
