import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
import { supabase } from '../client';


const leaderboardFixed = {
    "meta": {
        "title": "Golf Leaderboard - Masters Tournament",
        "description": "Golf Leaderboard including current leaderboard and round scores",
        "fields": {
            "tournament_object": {
                "id": "Integer",
                "type": "String - Stroke Play or Match Play - determines how to display leaderboard results.",
                "tour_id": "Integer",
                "name": "String",
                "country": "String",
                "course": "String",
                "start_date": "String",
                "end_date": "String",
                "timezone": "String",
                "prize_fund": "String",
                "fund_currency": "String",
                "live_details": {
                    "status": "String - pre, inprogress, endofday, completed",
                    "current_round": "Integer",
                    "total_rounds": "Integer - total number of rounds in competition",
                    "players": "Integer - number of active players",
                    "updated": "Timestamp - ISO UTC 2020-08-13T05:45:03+00:00"
                }
            },
            "leaderboard_array": {
                "position": "Integer - ignore if 0, position in tournament",
                "player_id": "Integer - unique player_id",
                "first_name": "String",
                "last_name": "String",
                "country": "String",
                "holes_played": "Integer - 0=Not Started, >0 In Play, 18=Finished",
                "current_round": "Integer - player current round",
                "status": "String - active, cut, retired, wd=withdrawn, dsq=disqualified",
                "strokes": "Integer - total strokes across all rounds - updated on completion of each round, default = 0",
                "updated": "Timestamp - Format ISO UTC 2020-08-13T05:45:03+00:00",
                "prize_money": "String - player winnings",
                "ranking_points": "String - ranking points won for this competition",
                "total_to_par": "String - player score over all rounds completed",
                "rounds_array": {
                    "round_number": "Integer",
                    "course_number": "Integer - course to which round relates",
                    "position_round": "Integer - position within this round",
                    "tee_time_local": "String - tee time in tournament timezone",
                    "total_to_par": "String - score this round",
                    "strokes": "Integer - strokes this round",
                    "updated": "Timestamp - Format ISO UTC 2020-08-13T05:45:03+00:00"
                }
            }
        }
    },
    "results": {
        "tournament": {
            "id": 456,
            "type": "Stroke Play",
            "tour_id": 2,
            "name": "Masters Tournament",
            "country": "Augusta, USA",
            "course": "Augusta National Golf Club",
            "start_date": "2022-04-07 00:00:00",
            "end_date": "2022-04-10 00:00:00",
            "timezone": "America/New_York",
            "prize_fund": "15000000",
            "fund_currency": "USD",
            "live_details": {
                "status": "endofday",
                "current_round": 4,
                "total_rounds": 4,
                "players": 92,
                "cut_value": null,
                "updated": "2022-04-11T02:38:06+00:00"
            }
        },
        "leaderboard": [
            {
                "position": 1,
                "player_id": 138154,
                "first_name": "Scottie",
                "last_name": "Scheffler",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 278,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "2700000",
                "ranking_points": "600.000",
                "total_to_par": -10,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "11:26",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 1,
                        "tee_time_local": "14:03",
                        "total_to_par": -5,
                        "strokes": 67,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "14:50",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 16,
                        "tee_time_local": "2:40 PM",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-10T00:28:01+00:00"
                    }
                ]
            },
            {
                "position": 2,
                "player_id": 84727,
                "first_name": "Rory",
                "last_name": "McIlroy",
                "country": "NIR",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 281,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "1620000",
                "ranking_points": "330.000",
                "total_to_par": -7,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "14:33",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 20,
                        "tee_time_local": "10:45",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "12:20",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 1,
                        "tee_time_local": "1:50 PM",
                        "total_to_par": -8,
                        "strokes": 64,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 3,
                "player_id": 99628,
                "first_name": "Shane",
                "last_name": "Lowry",
                "country": "IRL",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 283,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "870000",
                "ranking_points": "180.000",
                "total_to_par": -5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "10:31",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "13:08",
                        "total_to_par": -4,
                        "strokes": 68,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 53,
                        "tee_time_local": "14:40",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 4,
                        "tee_time_local": "2:30 PM",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-10T00:28:01+00:00"
                    }
                ]
            },
            {
                "position": 3,
                "player_id": 107689,
                "first_name": "Cameron",
                "last_name": "Smith",
                "country": "AUS",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 283,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "870000",
                "ranking_points": "180.000",
                "total_to_par": -5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 2,
                        "tee_time_local": "10:53",
                        "total_to_par": -4,
                        "strokes": 68,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "13:30",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 1,
                        "tee_time_local": "14:10",
                        "total_to_par": -4,
                        "strokes": 68,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "2:40 PM",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-10T00:28:01+00:00"
                    }
                ]
            },
            {
                "position": 5,
                "player_id": 151591,
                "first_name": "Collin",
                "last_name": "Morikawa",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 284,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "600000",
                "ranking_points": "120.000",
                "total_to_par": -4,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "14:00",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 7,
                        "tee_time_local": "10:12",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 63,
                        "tee_time_local": "14:00",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 2,
                        "tee_time_local": "1:50 PM",
                        "total_to_par": -5,
                        "strokes": 67,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 6,
                "player_id": 142465,
                "first_name": "Will",
                "last_name": "Zalatoris",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 285,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "521250",
                "ranking_points": "105.000",
                "total_to_par": -3,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "14:11",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 14,
                        "tee_time_local": "10:23",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "14:00",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 2,
                        "tee_time_local": "1:30 PM",
                        "total_to_par": -5,
                        "strokes": 67,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 6,
                "player_id": 120007,
                "first_name": "Corey",
                "last_name": "Conners",
                "country": "CAN",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 285,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "521250",
                "ranking_points": "105.000",
                "total_to_par": -3,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 7,
                        "tee_time_local": "12:43",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 20,
                        "tee_time_local": "08:55",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "14:10",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 9,
                        "tee_time_local": "2:10 PM",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-10T00:28:01+00:00"
                    }
                ]
            },
            {
                "position": 8,
                "player_id": 100360,
                "first_name": "Justin",
                "last_name": "Thomas",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 287,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "450000",
                "ranking_points": "91.000",
                "total_to_par": -1,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 71,
                        "tee_time_local": "11:15",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 1,
                        "tee_time_local": "13:52",
                        "total_to_par": -5,
                        "strokes": 67,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "13:40",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "2:20 PM",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-10T00:28:01+00:00"
                    }
                ]
            },
            {
                "position": 8,
                "player_id": 119929,
                "first_name": "Sungjae",
                "last_name": "Im",
                "country": "KOR",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 287,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "450000",
                "ranking_points": "91.000",
                "total_to_par": -1,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 1,
                        "tee_time_local": "13:27",
                        "total_to_par": -5,
                        "strokes": 67,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "09:39",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "14:40",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 82,
                        "tee_time_local": "2:30 PM",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-10T00:28:01+00:00"
                    }
                ]
            },
            {
                "position": 10,
                "player_id": 157132,
                "first_name": "Cameron",
                "last_name": "Champ",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 288,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "390000",
                "ranking_points": "79.500",
                "total_to_par": 0,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "11:59",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "08:11",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "11:30",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 9,
                        "tee_time_local": "1:40 PM",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 10,
                "player_id": 79009,
                "first_name": "Charl",
                "last_name": "Schwartzel",
                "country": "RSA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 288,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "390000",
                "ranking_points": "79.500",
                "total_to_par": 0,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "12:21",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 4,
                        "tee_time_local": "08:33",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 53,
                        "tee_time_local": "14:50",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 75,
                        "tee_time_local": "2:20 PM",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-10T00:28:01+00:00"
                    }
                ]
            },
            {
                "position": 12,
                "player_id": 92791,
                "first_name": "Dustin",
                "last_name": "Johnson",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 289,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "330000",
                "ranking_points": "70.000",
                "total_to_par": 1,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "14:00",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 20,
                        "tee_time_local": "10:12",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "14:20",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "1:40 PM",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 12,
                "player_id": 96433,
                "first_name": "Danny",
                "last_name": "Willett",
                "country": "ENG",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 289,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "330000",
                "ranking_points": "70.000",
                "total_to_par": 1,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "10:20",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "12:57",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 53,
                        "tee_time_local": "13:50",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "2:10 PM",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 14,
                "player_id": 76204,
                "first_name": "Kevin",
                "last_name": "Na",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 290,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "225333",
                "ranking_points": "55.022",
                "total_to_par": 2,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "10:31",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 11,
                        "tee_time_local": "13:08",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 85,
                        "tee_time_local": "14:20",
                        "total_to_par": 7,
                        "strokes": 79,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 4,
                        "tee_time_local": "11:30 AM",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 14,
                "player_id": 120310,
                "first_name": "Matthew",
                "last_name": "Fitzpatrick",
                "country": "ENG",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 290,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "225333",
                "ranking_points": "55.022",
                "total_to_par": 2,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "14:33",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 20,
                        "tee_time_local": "10:45",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 72,
                        "tee_time_local": "13:20",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 9,
                        "tee_time_local": "12:00 PM",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 14,
                "player_id": 112150,
                "first_name": "Min Woo",
                "last_name": "Lee",
                "country": "AUS",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 290,
                "updated": "2022-04-29T14:02:07+00:00",
                "prize_money": "225333",
                "ranking_points": "",
                "total_to_par": 2,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "09:25",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "12:02",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "10:30",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 9,
                        "tee_time_local": "12:30 PM",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 14,
                "player_id": 100807,
                "first_name": "Harry",
                "last_name": "Higgs",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 290,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "225333",
                "ranking_points": "55.022",
                "total_to_par": 2,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "09:36",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "12:13",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 53,
                        "tee_time_local": "12:10",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 16,
                        "tee_time_local": "12:40 PM",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 14,
                "player_id": 61204,
                "first_name": "Lee",
                "last_name": "Westwood",
                "country": "ENG",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 290,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "225333",
                "ranking_points": "55.022",
                "total_to_par": 2,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "12:43",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "08:55",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 53,
                        "tee_time_local": "12:50",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 16,
                        "tee_time_local": "12:40 PM",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 14,
                "player_id": 139222,
                "first_name": "Talor",
                "last_name": "Gooch",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 290,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "225333",
                "ranking_points": "55.022",
                "total_to_par": 2,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "10:20",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "12:57",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 53,
                        "tee_time_local": "11:40",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 16,
                        "tee_time_local": "1:00 PM",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 14,
                "player_id": 98533,
                "first_name": "Hideki",
                "last_name": "Matsuyama",
                "country": "JPN",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 290,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "225333",
                "ranking_points": "55.022",
                "total_to_par": 2,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "11:15",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 4,
                        "tee_time_local": "13:52",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 76,
                        "tee_time_local": "14:30",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "1:10 PM",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 14,
                "player_id": 92749,
                "first_name": "Tommy",
                "last_name": "Fleetwood",
                "country": "ENG",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 290,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "225333",
                "ranking_points": "55.022",
                "total_to_par": 2,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 61,
                        "tee_time_local": "10:42",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 14,
                        "tee_time_local": "13:19",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 2,
                        "tee_time_local": "11:00",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "2:00 PM",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 14,
                "player_id": 92848,
                "first_name": "Jason",
                "last_name": "Kokrak",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 290,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "225333",
                "ranking_points": "55.022",
                "total_to_par": 2,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 7,
                        "tee_time_local": "10:20",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 65,
                        "tee_time_local": "12:57",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "12:00",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "2:00 PM",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 23,
                "player_id": 156661,
                "first_name": "Robert",
                "last_name": "MacIntyre",
                "country": "SCO",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 291,
                "updated": "2022-04-29T14:02:07+00:00",
                "prize_money": "138000",
                "ranking_points": "",
                "total_to_par": 3,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "12:21",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 20,
                        "tee_time_local": "08:33",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 72,
                        "tee_time_local": "12:50",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 4,
                        "tee_time_local": "11:10 AM",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 23,
                "player_id": 111583,
                "first_name": "Harold",
                "last_name": "Varner III",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 291,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "138000",
                "ranking_points": "41.225",
                "total_to_par": 3,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "13:38",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 11,
                        "tee_time_local": "09:50",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 90,
                        "tee_time_local": "14:30",
                        "total_to_par": 8,
                        "strokes": 80,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 4,
                        "tee_time_local": "11:10 AM",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 23,
                "player_id": 63643,
                "first_name": "Sergio",
                "last_name": "Garcia",
                "country": "ESP",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 291,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "138000",
                "ranking_points": "41.225",
                "total_to_par": 3,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "13:38",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "09:50",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 63,
                        "tee_time_local": "12:40",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 16,
                        "tee_time_local": "12:10 PM",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 23,
                "player_id": 117988,
                "first_name": "J.J.",
                "last_name": "Spaun",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 291,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "138000",
                "ranking_points": "41.225",
                "total_to_par": 3,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "08:30",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 7,
                        "tee_time_local": "10:56",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "13:20",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "12:30 PM",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 27,
                "player_id": 140926,
                "first_name": "Jon",
                "last_name": "Rahm",
                "country": "ESP",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 292,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "111000",
                "ranking_points": "35.133",
                "total_to_par": 4,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "14:11",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 14,
                        "tee_time_local": "10:23",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 76,
                        "tee_time_local": "12:30",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 4,
                        "tee_time_local": "10:50 AM",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 27,
                "player_id": 84772,
                "first_name": "Seamus",
                "last_name": "Power",
                "country": "IRL",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 292,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "111000",
                "ranking_points": "35.133",
                "total_to_par": 4,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "12:54",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "09:06",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 63,
                        "tee_time_local": "10:40",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 9,
                        "tee_time_local": "11:30 AM",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 27,
                "player_id": 140167,
                "first_name": "Viktor",
                "last_name": "Hovland",
                "country": "NOR",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 292,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "111000",
                "ranking_points": "35.133",
                "total_to_par": 4,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "14:22",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 65,
                        "tee_time_local": "10:34",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "10:30",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "1:10 PM",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 30,
                "player_id": 102310,
                "first_name": "Russell",
                "last_name": "Henley",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 293,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "93150",
                "ranking_points": "28.333",
                "total_to_par": 5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "12:43",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "08:55",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 72,
                        "tee_time_local": "11:20",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 9,
                        "tee_time_local": "11:00 AM",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 30,
                "player_id": 149896,
                "first_name": "Sepp",
                "last_name": "Straka",
                "country": "AUT",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 293,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "93150",
                "ranking_points": "28.333",
                "total_to_par": 5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "08:52",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 14,
                        "tee_time_local": "11:29",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 72,
                        "tee_time_local": "12:20",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 16,
                        "tee_time_local": "11:20 AM",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 30,
                "player_id": 77716,
                "first_name": "Lucas",
                "last_name": "Glover",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 293,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "93150",
                "ranking_points": "28.333",
                "total_to_par": 5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "11:59",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 65,
                        "tee_time_local": "08:11",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "10:50",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "12:20 PM",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 30,
                "player_id": 102808,
                "first_name": "Hudson",
                "last_name": "Swafford",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 293,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "93150",
                "ranking_points": "28.333",
                "total_to_par": 5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 78,
                        "tee_time_local": "09:25",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 4,
                        "tee_time_local": "12:02",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 53,
                        "tee_time_local": "12:10",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 75,
                        "tee_time_local": "12:50 PM",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 30,
                "player_id": 80569,
                "first_name": "Marc",
                "last_name": "Leishman",
                "country": "AUS",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 293,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "93150",
                "ranking_points": "28.333",
                "total_to_par": 5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "13:27",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "09:39",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "10:40",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 75,
                        "tee_time_local": "1:00 PM",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 35,
                "player_id": 136474,
                "first_name": "Joaquin",
                "last_name": "Niemann",
                "country": "CHI",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 294,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "75563",
                "ranking_points": "22.100",
                "total_to_par": 6,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 3,
                        "tee_time_local": "11:04",
                        "total_to_par": -3,
                        "strokes": 69,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "13:41",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 76,
                        "tee_time_local": "13:50",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 75,
                        "tee_time_local": "11:50 AM",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 35,
                "player_id": 89191,
                "first_name": "Tony",
                "last_name": "Finau",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 294,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "75563",
                "ranking_points": "22.100",
                "total_to_par": 6,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "11:26",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "14:03",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 63,
                        "tee_time_local": "11:30",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 75,
                        "tee_time_local": "12:10 PM",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 35,
                "player_id": 103096,
                "first_name": "Patrick",
                "last_name": "Reed",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 294,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "75563",
                "ranking_points": "22.100",
                "total_to_par": 6,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "12:54",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 20,
                        "tee_time_local": "09:06",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 53,
                        "tee_time_local": "11:20",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 75,
                        "tee_time_local": "12:20 PM",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 35,
                "player_id": 87679,
                "first_name": "Webb",
                "last_name": "Simpson",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 294,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "75563",
                "ranking_points": "22.100",
                "total_to_par": 6,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "13:27",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "09:39",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 53,
                        "tee_time_local": "13:10",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 83,
                        "tee_time_local": "1:30 PM",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 39,
                "player_id": 106366,
                "first_name": "Patrick",
                "last_name": "Cantlay",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 295,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "63000",
                "ranking_points": "17.567",
                "total_to_par": 7,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 7,
                        "tee_time_local": "14:11",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "10:23",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 85,
                        "tee_time_local": "13:10",
                        "total_to_par": 7,
                        "strokes": 79,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 16,
                        "tee_time_local": "10:30 AM",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 39,
                "player_id": 77428,
                "first_name": "Bubba",
                "last_name": "Watson",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 295,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "63000",
                "ranking_points": "17.567",
                "total_to_par": 7,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "13:05",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 20,
                        "tee_time_local": "09:17",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 83,
                        "tee_time_local": "12:40",
                        "total_to_par": 6,
                        "strokes": 78,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 16,
                        "tee_time_local": "10:40 AM",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 39,
                "player_id": 106612,
                "first_name": "Tom",
                "last_name": "Hoge",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 295,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "63000",
                "ranking_points": "17.567",
                "total_to_par": 7,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "13:05",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "09:17",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "11:10",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "11:20 AM",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 39,
                "player_id": 112381,
                "first_name": "Si Woo",
                "last_name": "Kim",
                "country": "KOR",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 295,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "63000",
                "ranking_points": "17.567",
                "total_to_par": 7,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 71,
                        "tee_time_local": "09:47",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 7,
                        "tee_time_local": "12:24",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 53,
                        "tee_time_local": "12:00",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 83,
                        "tee_time_local": "12:50 PM",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 43,
                "player_id": 88276,
                "first_name": "Billy",
                "last_name": "Horschel",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 296,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "55500",
                "ranking_points": "14.733",
                "total_to_par": 8,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "14:00",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 20,
                        "tee_time_local": "10:12",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 85,
                        "tee_time_local": "11:10",
                        "total_to_par": 7,
                        "strokes": 79,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 9,
                        "tee_time_local": "10:20 AM",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 44,
                "player_id": 136582,
                "first_name": "Christiaan",
                "last_name": "Bezuidenhout",
                "country": "RSA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 297,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "51000",
                "ranking_points": "13.034",
                "total_to_par": 9,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "12:10",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 11,
                        "tee_time_local": "08:22",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 76,
                        "tee_time_local": "13:40",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-09T00:34:01+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 83,
                        "tee_time_local": "11:50 AM",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 44,
                "player_id": 88450,
                "first_name": "Kevin",
                "last_name": "Kisner",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 297,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "51000",
                "ranking_points": "13.034",
                "total_to_par": 9,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 61,
                        "tee_time_local": "10:42",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 7,
                        "tee_time_local": "13:19",
                        "total_to_par": -2,
                        "strokes": 70,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "13:00",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 86,
                        "tee_time_local": "12:00 PM",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-10T00:28:02+00:00"
                    }
                ]
            },
            {
                "position": 46,
                "player_id": 135487,
                "first_name": "Cameron",
                "last_name": "Davis",
                "country": "AUS",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 300,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "46500",
                "ranking_points": "11.900",
                "total_to_par": 12,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 61,
                        "tee_time_local": "12:10",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 20,
                        "tee_time_local": "08:22",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 85,
                        "tee_time_local": "10:50",
                        "total_to_par": 7,
                        "strokes": 79,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 67,
                        "tee_time_local": "10:10 AM",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 47,
                "player_id": 26395,
                "first_name": "Tiger",
                "last_name": "Woods",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 301,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "43500",
                "ranking_points": "11.333",
                "total_to_par": 13,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "11:04",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "13:41",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 83,
                        "tee_time_local": "13:00",
                        "total_to_par": 6,
                        "strokes": 78,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 87,
                        "tee_time_local": "10:50 AM",
                        "total_to_par": 6,
                        "strokes": 78,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 48,
                "player_id": 73522,
                "first_name": "Adam",
                "last_name": "Scott",
                "country": "AUS",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 302,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "40050",
                "ranking_points": "10.484",
                "total_to_par": 14,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "11:26",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "14:03",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 90,
                        "tee_time_local": "10:20",
                        "total_to_par": 8,
                        "strokes": 80,
                        "updated": "2022-04-09T00:34:03+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 75,
                        "tee_time_local": "10:10 AM",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 48,
                "player_id": 119947,
                "first_name": "Max",
                "last_name": "Homa",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 302,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "40050",
                "ranking_points": "10.484",
                "total_to_par": 14,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "10:31",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 20,
                        "tee_time_local": "13:08",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 76,
                        "tee_time_local": "11:00",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 87,
                        "tee_time_local": "10:40 AM",
                        "total_to_par": 6,
                        "strokes": 78,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 50,
                "player_id": 106534,
                "first_name": "Mackenzie",
                "last_name": "Hughes",
                "country": "CAN",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 303,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "37350",
                "ranking_points": "9.350",
                "total_to_par": 15,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "10:09",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "12:35",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 76,
                        "tee_time_local": "10:20",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 87,
                        "tee_time_local": "10:30 AM",
                        "total_to_par": 6,
                        "strokes": 78,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 50,
                "player_id": 120094,
                "first_name": "Daniel",
                "last_name": "Berger",
                "country": "USA",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 303,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "37350",
                "ranking_points": "9.350",
                "total_to_par": 15,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "10:42",
                        "total_to_par": -1,
                        "strokes": 71,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "13:19",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 76,
                        "tee_time_local": "11:40",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 90,
                        "tee_time_local": "11:00 AM",
                        "total_to_par": 8,
                        "strokes": 80,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 52,
                "player_id": 103105,
                "first_name": "Tyrrell",
                "last_name": "Hatton",
                "country": "ENG",
                "holes_played": 18,
                "current_round": 4,
                "status": "active",
                "strokes": 305,
                "updated": "2022-04-29T14:02:08+00:00",
                "prize_money": "36000",
                "ranking_points": "8.500",
                "total_to_par": 17,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "13:49",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "10:01",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 85,
                        "tee_time_local": "12:30",
                        "total_to_par": 7,
                        "strokes": 79,
                        "updated": "2022-04-09T00:34:02+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 90,
                        "tee_time_local": "10:20 AM",
                        "total_to_par": 8,
                        "strokes": 80,
                        "updated": "2022-04-10T00:28:03+00:00"
                    }
                ]
            },
            {
                "position": 53,
                "player_id": 143767,
                "first_name": "Takumi",
                "last_name": "Kanaya",
                "country": "JPN",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 149,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 61,
                        "tee_time_local": "12:32",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "08:44",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 54,
                "player_id": 142528,
                "first_name": "Sam",
                "last_name": "Burns",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 149,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 61,
                        "tee_time_local": "13:49",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "10:01",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 55,
                "player_id": 62314,
                "first_name": "Padraig",
                "last_name": "Harrington",
                "country": "IRL",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 149,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "08:41",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "11:18",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 56,
                "player_id": 98389,
                "first_name": "Kyoung-Hoon",
                "last_name": "Lee",
                "country": "KOR",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 149,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "09:14",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "11:51",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 57,
                "player_id": 82948,
                "first_name": "Brian",
                "last_name": "Harman",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 149,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "09:36",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "12:13",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 58,
                "player_id": 72088,
                "first_name": "Zach",
                "last_name": "Johnson",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 149,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 5,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "09:47",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "12:24",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 59,
                "player_id": 117190,
                "first_name": "Lucas",
                "last_name": "Herbert",
                "country": "AUS",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 150,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 6,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "12:54",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 65,
                        "tee_time_local": "09:06",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 60,
                "player_id": 102154,
                "first_name": "Jordan",
                "last_name": "Spieth",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 150,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 6,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "14:22",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 65,
                        "tee_time_local": "10:34",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 61,
                "player_id": 110083,
                "first_name": "Brooks",
                "last_name": "Koepka",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 150,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 6,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 61,
                        "tee_time_local": "14:33",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "10:45",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 62,
                "player_id": 31285,
                "first_name": "Mike",
                "last_name": "Weir",
                "country": "CAN",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 150,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 6,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "08:41",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 65,
                        "tee_time_local": "11:18",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 63,
                "player_id": 69976,
                "first_name": "Ryan",
                "last_name": "Palmer",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 150,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 6,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 61,
                        "tee_time_local": "09:14",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "11:51",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 64,
                "player_id": 147700,
                "first_name": "Keita",
                "last_name": "Nakajima",
                "country": "JPN",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 151,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 7,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "13:05",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 81,
                        "tee_time_local": "09:17",
                        "total_to_par": 7,
                        "strokes": 79,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 65,
                "player_id": 136594,
                "first_name": "Abraham",
                "last_name": "Ancer",
                "country": "MEX",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 151,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 7,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "13:49",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 81,
                        "tee_time_local": "10:01",
                        "total_to_par": 7,
                        "strokes": 79,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:07+00:00"
                    }
                ]
            },
            {
                "position": 66,
                "player_id": 144259,
                "first_name": "Xander",
                "last_name": "Schauffele",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 151,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 7,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "14:22",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 74,
                        "tee_time_local": "10:34",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 67,
                "player_id": 183445,
                "first_name": "Austin",
                "last_name": "Greaser",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 151,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 7,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 44,
                        "tee_time_local": "08:41",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 74,
                        "tee_time_local": "11:18",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 68,
                "player_id": 60703,
                "first_name": "Stewart",
                "last_name": "Cink",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 151,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 7,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 71,
                        "tee_time_local": "09:36",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "12:13",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 69,
                "player_id": 120034,
                "first_name": "Erik",
                "last_name": "Van Rooyen",
                "country": "RSA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 152,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 8,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 32,
                        "tee_time_local": "11:59",
                        "total_to_par": 1,
                        "strokes": 73,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 81,
                        "tee_time_local": "08:11",
                        "total_to_par": 7,
                        "strokes": 79,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 70,
                "player_id": 5014,
                "first_name": "Bernhard",
                "last_name": "Langer",
                "country": "GER",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 152,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 8,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 71,
                        "tee_time_local": "12:10",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 65,
                        "tee_time_local": "08:22",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 71,
                "player_id": 93985,
                "first_name": "Gary",
                "last_name": "Woodland",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 152,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 8,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 61,
                        "tee_time_local": "12:32",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 74,
                        "tee_time_local": "08:44",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 72,
                "player_id": 67231,
                "first_name": "Justin",
                "last_name": "Rose",
                "country": "ENG",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 152,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 8,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 71,
                        "tee_time_local": "12:32",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 65,
                        "tee_time_local": "08:44",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 73,
                "player_id": 75610,
                "first_name": "Francesco",
                "last_name": "Molinari",
                "country": "ITA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 152,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 8,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 83,
                        "tee_time_local": "08:52",
                        "total_to_par": 6,
                        "strokes": 78,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "11:29",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 74,
                "player_id": 119518,
                "first_name": "Guido",
                "last_name": "Migliozzi",
                "country": "ITA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 152,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 8,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 61,
                        "tee_time_local": "09:03",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 74,
                        "tee_time_local": "11:40",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 75,
                "player_id": 81403,
                "first_name": "Luke",
                "last_name": "List",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 152,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 8,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 78,
                        "tee_time_local": "10:09",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 49,
                        "tee_time_local": "12:35",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 76,
                "player_id": 3694,
                "first_name": "Fred",
                "last_name": "Couples",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 154,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 10,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 61,
                        "tee_time_local": "09:03",
                        "total_to_par": 3,
                        "strokes": 75,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 81,
                        "tee_time_local": "11:40",
                        "total_to_par": 7,
                        "strokes": 79,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 77,
                "player_id": 172114,
                "first_name": "Cameron",
                "last_name": "Young",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 154,
                "updated": "2022-04-11T02:38:05+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 10,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 78,
                        "tee_time_local": "09:25",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 74,
                        "tee_time_local": "12:02",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 78,
                "player_id": 5485,
                "first_name": "Larry",
                "last_name": "Mize",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 155,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 11,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 78,
                        "tee_time_local": "08:52",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 79,
                        "tee_time_local": "11:29",
                        "total_to_par": 6,
                        "strokes": 78,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 79,
                "player_id": 163279,
                "first_name": "Garrick",
                "last_name": "Higgo",
                "country": "RSA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 155,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 11,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "09:03",
                        "total_to_par": 0,
                        "strokes": 72,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 89,
                        "tee_time_local": "11:40",
                        "total_to_par": 11,
                        "strokes": 83,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 80,
                "player_id": 184696,
                "first_name": "Aaron",
                "last_name": "Jarvis",
                "country": "CAY",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 155,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 11,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 87,
                        "tee_time_local": "09:47",
                        "total_to_par": 9,
                        "strokes": 81,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "12:24",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 81,
                "player_id": 177508,
                "first_name": "James",
                "last_name": "Piot",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 155,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 11,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 87,
                        "tee_time_local": "11:15",
                        "total_to_par": 9,
                        "strokes": 81,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 30,
                        "tee_time_local": "13:52",
                        "total_to_par": 2,
                        "strokes": 74,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 82,
                "player_id": 143893,
                "first_name": "Bryson",
                "last_name": "DeChambeau",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 156,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 12,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 71,
                        "tee_time_local": "10:53",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 85,
                        "tee_time_local": "13:30",
                        "total_to_par": 8,
                        "strokes": 80,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 83,
                "player_id": 5167,
                "first_name": "Sandy",
                "last_name": "Lyle",
                "country": "SCO",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 158,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 14,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 91,
                        "tee_time_local": "11:48",
                        "total_to_par": 10,
                        "strokes": 82,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 65,
                        "tee_time_local": "08:00",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 84,
                "player_id": 19717,
                "first_name": "Vijay",
                "last_name": "Singh",
                "country": "FIJ",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 158,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 14,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 83,
                        "tee_time_local": "09:14",
                        "total_to_par": 6,
                        "strokes": 78,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 85,
                        "tee_time_local": "11:51",
                        "total_to_par": 8,
                        "strokes": 80,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 85,
                "player_id": 99895,
                "first_name": "Thomas",
                "last_name": "Pieters",
                "country": "BEL",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 159,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 15,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 85,
                        "tee_time_local": "13:38",
                        "total_to_par": 7,
                        "strokes": 79,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 85,
                        "tee_time_local": "09:50",
                        "total_to_par": 8,
                        "strokes": 80,
                        "updated": "2022-04-07T12:42:04+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 86,
                "player_id": 168850,
                "first_name": "Matthew",
                "last_name": "Wolff",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 159,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 15,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 87,
                        "tee_time_local": "10:09",
                        "total_to_par": 9,
                        "strokes": 81,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 79,
                        "tee_time_local": "12:35",
                        "total_to_par": 6,
                        "strokes": 78,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 87,
                "player_id": 154774,
                "first_name": "Stewart",
                "last_name": "Hagestad",
                "country": "USA",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 160,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 16,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 85,
                        "tee_time_local": "11:48",
                        "total_to_par": 7,
                        "strokes": 79,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 88,
                        "tee_time_local": "08:00",
                        "total_to_par": 9,
                        "strokes": 81,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 88,
                "player_id": 19135,
                "first_name": "Jose Maria",
                "last_name": "Olazabal",
                "country": "ESP",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 161,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 17,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 78,
                        "tee_time_local": "08:30",
                        "total_to_par": 5,
                        "strokes": 77,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 90,
                        "tee_time_local": "10:56",
                        "total_to_par": 12,
                        "strokes": 84,
                        "updated": "2022-04-07T12:42:02+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 89,
                "player_id": 181129,
                "first_name": "Laird",
                "last_name": "Shepherd",
                "country": "ENG",
                "holes_played": 0,
                "current_round": 4,
                "status": "cut",
                "strokes": 166,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 22,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 87,
                        "tee_time_local": "12:21",
                        "total_to_par": 9,
                        "strokes": 81,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 91,
                        "tee_time_local": "08:33",
                        "total_to_par": 13,
                        "strokes": 85,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 90,
                "player_id": 79003,
                "first_name": "Louis",
                "last_name": "Oosthuizen",
                "country": "RSA",
                "holes_played": 0,
                "current_round": 4,
                "status": "wd",
                "strokes": 0,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 4,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 71,
                        "tee_time_local": "11:04",
                        "total_to_par": 4,
                        "strokes": 76,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 14,
                        "tee_time_local": "13:41",
                        "total_to_par": 0,
                        "strokes": null,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            },
            {
                "position": 91,
                "player_id": 76108,
                "first_name": "Paul",
                "last_name": "Casey",
                "country": "ENG",
                "holes_played": 0,
                "current_round": 4,
                "status": "wd",
                "strokes": 0,
                "updated": "2022-04-11T02:38:06+00:00",
                "prize_money": "",
                "ranking_points": "",
                "total_to_par": 0,
                "rounds": [
                    {
                        "round_number": 1,
                        "course_number": 1,
                        "position_round": 19,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 2,
                        "course_number": 1,
                        "position_round": 14,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-07T12:42:03+00:00"
                    },
                    {
                        "round_number": 3,
                        "course_number": 1,
                        "position_round": 10,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-09T12:24:05+00:00"
                    },
                    {
                        "round_number": 4,
                        "course_number": 1,
                        "position_round": 24,
                        "tee_time_local": "",
                        "total_to_par": 0,
                        "strokes": 0,
                        "updated": "2022-04-10T12:28:08+00:00"
                    }
                ]
            }
        ]
    }
}

const initialState = {
    combined: [],
    worldRankings: [],
    entries: [],
    loading: true,
    picks: [],
    lads: [],
    scores: [],
    updated: undefined

};

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getEntries = async () => {
        // setLoading();
        const requestOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            },
        };

        const res = await axios.get(
            `https://golf-leaderboard-data.p.rapidapi.com/entry-list/456`,
            requestOptions
        );
        return res.data.results.entry_list


    };
    const getRankings = async () => {
        // setLoading();
        const requestOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            },
        };

        const res = await axios.get(
            `https://golf-leaderboard-data.p.rapidapi.com/world-rankings`,
            requestOptions
        );
        return res.data.results.rankings

    };

    const getCombined = async () => {
        const entries = await getEntries()
        const worldRankings = await getRankings()
        const data = entries.map(player => {
            const ranking = worldRankings.find(r => r.player_id === player.player_id);
            if (ranking) {

                return {
                    ...player,
                    ranking: ranking.position
                }
            } else {
                return { ...player, ranking: 999 }
            }

        })

        data.sort((a, b) => {
            return a.ranking - b.ranking
        })


        dispatch({
            type: 'GET_COMBINED',
            payload: data,
        });

    }

    const getTeams = async () => {
        let { data: selections, error } = await supabase
            .from('selections')
            .select('*')

        //console.log(selections.sort((a, b) => a.id - b.id))
        const requestOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            },
        };

        // const res = await axios.get(
        //     `https://golf-leaderboard-data.p.rapidapi.com/leaderboard/456`,
        //     requestOptions
        // );
        const res = leaderboardFixed

        const leaderboard = res.results.leaderboard
        const updated = res.results.tournament.live_details.updated

        const getTotalToPar = (arr) => {
            let total = 0;
            arr.forEach(player => {
                if (player.status == 'wd' || player.status == 'cut') {
                    total = total + player.total_to_par + 5;
                } else {
                    total += player.total_to_par
                }
            })
            return total
        }

        // const getTotalToPar = (arr) => {
        //     let total = 0;
        //     arr.forEach(player => {
        //         if (player.status == 'cut') {
        //             total = total + player.total_to_par + 5 + 72;
        //         } else if (player.status == 'wd') {
        //             total = total + player.total_to_par + 5
        //         }
        //         else {
        //             total += player.total_to_par
        //         }
        //     })
        //     return total
        // }

        // const position = (place, equals) => {
        //     const joint = equals ? '=' : '';
        //     if (place.toString().endsWith(1) && !place.toString().endsWith(11)) return `${place}st${joint}`;
        //     if (place.toString().endsWith(2)) return `${place}nd${joint}`;
        //     if (place.toString().endsWith(3)) return `${place}rd${joint}`;

        //     return `${place}th${joint}`
        // }

        const formatted = selections.map(s => {
            const matchPlayer = (id) => {
                let player = leaderboard.find(p => p.player_id === id)
                return player
            }

            // loop over s picks and use reduce to sum
            const total = s.picks.reduce((acc, curr) => {


                return acc + curr.player_id
            }, 0)


            return {
                id: s.id, name: s.team_name, tiebreaker: s.tiebreaker, picks: s.picks.map(sel => matchPlayer(sel.player_id)), total: total, total_to_par: getTotalToPar(s.picks.map(sel => matchPlayer(sel.player_id)))
            }
        })
        formatted.sort((a, b) => {
            return a.total_to_par - b.total_to_par
        })


        let position = 0;
        for (const [index, standing] of formatted.entries()) {
            const eqPrev = index > 0 && formatted[index - 1].total_to_par === standing.total_to_par;
            const eqNext = index < formatted.length - 1 && formatted[index + 1].total_to_par === standing.total_to_par;

            if (!eqPrev) position = index + 1;

            standing.position = ((eqPrev || eqNext) ? "" : "") + position;
        }



        // check if any objects in formatted have the same total value
        const checkDuplicates = (arr) => {

            let dupes = []
            arr.forEach(obj => {
                if (arr.filter(o => o.total === obj.total).length > 1) {
                    dupes.push(obj)
                }
            })
            return dupes
        }

        //console.log(checkDuplicates(formatted))



        // console.log(formatted.sort((a, b) => b.total - a.total))

        dispatch({
            type: 'GET_TEAMS',
            payload: { data: formatted, updated: updated },
        });
    }
    const getLadsTeams = async () => {
        let { data: selections, error } = await supabase
            .from('selections')
            .select('*')

        //console.log(selections.sort((a, b) => a.id - b.id))
        const requestOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            },
        };

        // const res = await axios.get(
        //     `https://golf-leaderboard-data.p.rapidapi.com/leaderboard/456`,
        //     requestOptions
        // );
        const res = leaderboardFixed
        const leaderboard = res.results.leaderboard
        const updated = res.results.tournament.live_details.updated
        const getTotalToPar = (arr) => {
            let total = 0;
            arr.forEach(player => {
                if (player.status == 'wd' || player.status == 'cut') {
                    total = total + player.total_to_par + 5;
                } else {
                    total += player.total_to_par
                }
            })
            return total
        }

        // const getTotalToPar = (arr) => {
        //     let total = 0;
        //     arr.forEach(player => {
        //         if (player.status == 'cut') {
        //             total = total + player.total_to_par + 5 + 72;
        //         } else if (player.status == 'wd') {
        //             total = total + player.total_to_par + 5
        //         }
        //         else {
        //             total += player.total_to_par
        //         }
        //     })
        //     return total
        // }

        // const position = (place, equals) => {
        //     const joint = equals ? '=' : '';
        //     if (place.toString().endsWith(1) && !place.toString().endsWith(11)) return `${place}st${joint}`;
        //     if (place.toString().endsWith(2)) return `${place}nd${joint}`;
        //     if (place.toString().endsWith(3)) return `${place}rd${joint}`;

        //     return `${place}th${joint}`
        // }

        const formatted = selections.map(s => {
            const matchPlayer = (id) => {
                const player = leaderboard.find(p => p.player_id === id)

                return player
            }

            // loop over s picks and use reduce to sum
            const total = s.picks.reduce((acc, curr) => {


                return acc + curr.player_id
            }, 0)


            return {
                id: s.id, name: s.team_name, lads: s.lads, tiebreaker: s.tiebreaker, picks: s.picks.map(sel => matchPlayer(sel.player_id)), total: total, total_to_par: getTotalToPar(s.picks.map(sel => matchPlayer(sel.player_id)))
            }
        }).filter(sel => sel.lads)
        formatted.sort((a, b) => {
            return a.total_to_par - b.total_to_par
        })


        let position = 0;
        for (const [index, standing] of formatted.entries()) {
            const eqPrev = index > 0 && formatted[index - 1].total_to_par === standing.total_to_par;
            const eqNext = index < formatted.length - 1 && formatted[index + 1].total_to_par === standing.total_to_par;

            if (!eqPrev) position = index + 1;

            standing.position = ((eqPrev || eqNext) ? "" : "") + position;
        }


        dispatch({
            type: 'GET_LADS_TEAMS',
            payload: formatted
        });
    }

    const getScoreData = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com',
                'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
            },
        };

        // const res = await axios.get(
        //     `https://golf-leaderboard-data.p.rapidapi.com/leaderboard/386`,
        //     requestOptions
        // );
        const res = leaderboardFixed
        console.log(res.results.leaderboard)
        dispatch({
            type: 'GET_LEADERBOARD',
            payload: res.results.leaderboard,
        });
    }





    const getPlayer = async (id) => {

    }

    return (
        <GlobalContext.Provider
            value={{
                entries: state.entries,
                combined: state.combined,
                worldRankings: state.worldRankings,
                loading: state.loading,
                picks: state.picks,
                scores: state.scores,
                lads: state.lads,
                updated: state.updated,
                getLadsTeams,
                getTeams,
                getCombined,
                getEntries,
                getRankings,
                getScoreData
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}