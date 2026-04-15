const sinon = require('sinon');
const { expect } = require('chai');
const MenuItem = require('../models/MenuItem');
const { getMenuItem, addMenuItem, updateMenuItem, deleteMenuItem } = require('../controllers/menuItemController');

// Read
describe('GetMenuItem Function Test', () => {
    let req, res;
    beforeEach(() => {
        req = {};
        res = { json: sinon.stub(), status: sinon.stub().returnsThis() };
    });
    afterEach(() => { sinon.restore(); });

    it('should return all menu items successfully', async () => {
        const mockItems = [{ name: 'Pizza' }, { name: 'Pasta' }];
        sinon.stub(MenuItem, 'find').resolves(mockItems);
        await getMenuItem(req, res);
        expect(res.json.calledWith(mockItems)).to.be.true;
    });

    it('should return 500 if an error occurs', async () => {
        sinon.stub(MenuItem, 'find').rejects(new Error('DB Error'));
        await getMenuItem(req, res);
        expect(res.status.calledWith(500)).to.be.true;
    });
});

// Create
describe('AddMenuItem Function Test', () => {
    let req, res;
    beforeEach(() => {
        req = { body: { name: 'Pizza', description: 'Cheesy', price: 10, category: 'Main', available: true, date: '2026-04-15' } };
        res = { json: sinon.stub(), status: sinon.stub().returnsThis() };
    });
    afterEach(() => { sinon.restore(); });

    it('should create a menu item successfully', async () => {
        const mockItem = { _id: 'abc123', ...req.body };
        sinon.stub(MenuItem, 'create').resolves(mockItem);
        await addMenuItem(req, res);
        expect(res.status.calledWith(201)).to.be.true;
        expect(res.json.calledWith(mockItem)).to.be.true;
    });

    it('should return 500 if an error occurs', async () => {
        sinon.stub(MenuItem, 'create').rejects(new Error('DB Error'));
        await addMenuItem(req, res);
        expect(res.status.calledWith(500)).to.be.true;
    });
});

// Update
describe('UpdateMenuItem Function Test', () => {
    let req, res;
    beforeEach(() => {
        req = { params: { id: 'someId' }, body: { name: 'Updated Pizza' } };
        res = { json: sinon.stub(), status: sinon.stub().returnsThis() };
    });
    afterEach(() => { sinon.restore(); });

    it('should update a menu item successfully', async () => {
        const mockItem = { name: 'Pizza', save: sinon.stub().resolves({ name: 'Updated Pizza' }) };
        sinon.stub(MenuItem, 'findById').resolves(mockItem);
        await updateMenuItem(req, res);
        expect(res.json.called).to.be.true;
    });

    it('should return 404 if menu item is not found', async () => {
        sinon.stub(MenuItem, 'findById').resolves(null);
        await updateMenuItem(req, res);
        expect(res.status.calledWith(404)).to.be.true;
    });

    it('should return 500 if an error occurs', async () => {
        sinon.stub(MenuItem, 'findById').rejects(new Error('DB Error'));
        await updateMenuItem(req, res);
        expect(res.status.calledWith(500)).to.be.true;
    });
});

// Delete
describe('DeleteMenuItem Function Test', () => {
    let req, res;
    beforeEach(() => {
        req = { params: { id: 'someId' } };
        res = { json: sinon.stub(), status: sinon.stub().returnsThis() };
    });
    afterEach(() => { sinon.restore(); });

    it('should delete a menu item successfully', async () => {
        const mockItem = { deleteOne: sinon.stub().resolves() };
        sinon.stub(MenuItem, 'findById').resolves(mockItem);
        await deleteMenuItem(req, res);
        expect(res.json.calledWith({ message: 'Menu item deleted' })).to.be.true;
    });

    it('should return 404 if menu item is not found', async () => {
        sinon.stub(MenuItem, 'findById').resolves(null);
        await deleteMenuItem(req, res);
        expect(res.status.calledWith(404)).to.be.true;
    });

    it('should return 500 if an error occurs', async () => {
        sinon.stub(MenuItem, 'findById').rejects(new Error('Database error'));
        await deleteMenuItem(req, res);
        expect(res.status.calledWith(500)).to.be.true;
    });
});
