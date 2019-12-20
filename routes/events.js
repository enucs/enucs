const express = require('express');
const router = express.Router();
const db = require('../database/database');

/** 
 * GET mapping for base URL of Events page
 * Fetches list of events from database
 */
router.get('/', (req, res) => {
    db.getEvents((err, rows) => {
        rows = rows.map((row) => {
            if(row.start_time.toDateString() != row.end_time.toDateString()) {
                row.date = ''

            } else {
                row.date = row.start_time.toLocaleString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                });

                row.start_time = row.start_time.toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit'
                });

                row.end_time = row.end_time.toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit'
                });
            }       
            return row;
        });
        res.render('events', {
            title: 'Events',
            events: err ? null : rows
        });
    })
});

/** 
 * GET mapping for adding new event
 * TODO: Implement functionality to render page
 */
router.get('/add', (req, res) => {
    res.status(403);
    res.send('Forbidden!');
    return;
});

/** 
 * POST mapping for adding new event
 * TODO: Implement functionality for adding event
 */
router.post('/add', (req, res, next) => {
    res.status(403);
    res.send('Forbidden!');
    return;
});

/**
 * GET mapping for individual event page
 */
router.get('/:id', (req, res) => {
    res.render('event_page', {
        event: null
    });
});

module.exports = router;
