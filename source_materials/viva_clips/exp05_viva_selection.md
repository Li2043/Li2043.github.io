# EXP05 selection audit

| Field | Value |
|-------|-------|
| Replay mode | Reconstructed mechanism overlay |
| Seed | 900104 |
| Scenario | H1_00005 |
| Ego / neighbour | V0 / V3 |
| Event step/time | 14 / 2.8 s |
| b_i / b_j | 0.0000 / 0.0109 |
| g_i / c | 0.0109 / 0.0077843 |
| Severity | 0.1568 |
| Action / weight | ACCELERATE / 1.0 |
| Action preference tier | ACCELERATE |
| Median severity (tier) | 0.1568 |
| Percentile rank | 0.50 |

## Calibration (repository)
c = 0.007784310312400124, g95 = 0.027956245271296754, η_max = 0.0015

## Validation
{'utility_match': True, 'burden_match': True, 'gini_match': True, 'welfare_fn_available': True, 'ggi': 0.979830424583479, 'term_reason': 'success', 'warnings': [], 'passed': True}
